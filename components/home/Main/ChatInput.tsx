import { useAppContext } from "@/components/AppContext";
import { useEventBusContext } from "@/components/EventBusContext";
import Button from "@/components/common/Button";
import { ActionType } from "@/reducers/AppReducer";
import { Message, MessageRequestBody } from "@/types/chat";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdRefresh } from "react-icons/md";
import { PiLightningFill, PiStopBold } from "react-icons/pi";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid"

export default function ChatInput() {
    // Users' input message
    const [messageText, setMessageText] = useState("")

    const stopRef = useRef(false)
    const chatIdRef = useRef("")
    // Get message, model from global context
    const {
        state: { messageList, currentModel, streamingId }, dispatch
    } = useAppContext()
    const { publish } = useEventBusContext()

    async function createorUpdateMessage(message: Message) {
        const response = await fetch("api/message/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        //check response code
        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        const { data } = await response.json()
        if (!chatIdRef.current) {
            chatIdRef.current = data.message.chatId
            publish("fetchChatList")
        }
        return data.message

    }

    async function deleteMessage(id: string) {
        const response = await fetch(`/api/message/delete?id=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        //check response code
        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        const { code } = await response.json()
        return code === 0

    }

    async function send() {
        //current message
        const message = await createorUpdateMessage({
            id: "",
            role: "user",
            content: messageText,
            chatId: chatIdRef.current
        })
        //get message list
        const messages = messageList.concat([message])

        //add this message to the global state
        dispatch({ type: ActionType.ADD_MESSAGE, message })

        doSend(messages)
    }

    async function resend() {
        const messages = [...messageList]
        if (messages.length !== 0 &&
            messages[messageList.length - 1].role === "assistant"
        ) {
            //delete the message in server side(delete in database)
            const result = await deleteMessage(messages[messages.length - 1].id)
            if (!result) {
                console.log("delete error")
                return
            }
            //delete the last message from the global state and the temp message list
            dispatch({
                type: ActionType.REMOVE_MESSAGE,
                message: messages[messages.length - 1]
            })
            messages.splice(messages.length - 1, 1)
        }
        doSend(messages)

    }

    // Send message
    async function doSend(messages: Message[]) {
        // integrate into one body, with current model
        const body: MessageRequestBody = { messages, model: currentModel }

        //clear current message
        setMessageText("")
        //use the controller to close the stream
        const controller = new AbortController()
        const response = await fetch("api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //to interrupt the stream
            signal: controller.signal,
            body: JSON.stringify(body)
        })
        //check response code
        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        //check body ok
        if (!response.body) {
            console.log("body error")
            return
        }

        //GPT returned message
        //generated in server side
        const responseMessage: Message = await createorUpdateMessage({
            id: "",
            role: "assistant",
            content: "",
            chatId: chatIdRef.current
        })
        dispatch({ type: ActionType.ADD_MESSAGE, message: responseMessage })
        //set streaming id(while continuous)
        dispatch({
            type: ActionType.UPDATE,
            field: "streamingId",
            value: responseMessage.id
        })
        //Get the returned data stream
        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        //flag: whether the GPT finishes 
        let done = false;
        //temp variable to store the GPT returned message
        let content = ""
        while (!done) {
            if (stopRef.current) {
                stopRef.current = false
                controller.abort()
                break
            }
            const result = await reader.read()
            done = result.done
            //decode the stream into string
            const chunk = decoder.decode(result.value)
            //attach the decoded chunk to my content
            content += chunk
            //update content 
            dispatch({
                type: ActionType.UPDATE_MESSAGE,
                message: { ...responseMessage, content }
            })
        }
        createorUpdateMessage({
            ...responseMessage, content
        })
        //stream done, clear streaming id
        dispatch({
            type: ActionType.UPDATE,
            field: "streamingId",
            value: ""
        })
        //clear user message
        setMessageText("")

    }
    // The chat's input box, absoulte at the bottom, with a shadow
    return (
        <div className='absolute bottom-0 inset-x-0 bg-gradient-to-b from-[rgba(255,255,255,0)] from-[13.94%] to-[#fff] to-[54.73%] pt-10 dark:from-[rgba(53,55,64,0)] dark:to-[#353740] dark:to-[58.85%]'>
            <div className='w-full max-w-4xl mx-auto flex flex-col items-center px-4 space-y-4'>

                {messageList.length !== 0 &&
                    (streamingId !== "" ? (
                        <Button
                            icon={PiStopBold}
                            variant="primary"
                            onClick={() => {
                                stopRef.current = true
                            }}
                            className="font-medium"
                        >
                            Stop Generating
                        </Button>
                    ) : (
                        <Button
                            icon={MdRefresh}
                            variant="primary"
                            onClick={resend}
                            className="font-medium"
                        >
                            Regenerate
                        </Button>

                    ))
                }
                {/* /10 means 10% transparency*/}
                <div className='flex items-end w-full border border-black/10 dark:border-gray-800/50 bg-white dark:bg-gray-700 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] py-4'>
                    {/* Logo style: mx:margin of left and right, mb: margin of bottom */}
                    <div className="mx-3 mb-2.5">
                        <PiLightningFill />
                    </div>
                    <TextareaAutosize
                        /* Input style: resize-none: No manual zoom in/out  
                        border-0: Remove border
                        outline-none: Hide the default browser outline on focused elements. 
                        */
                        className="outline-none flex-1 max-h-64 mb-1.5 bg-transparent text-black dark:text-white resize-none border-0"
                        placeholder="First message..."
                        rows={1}
                        value={messageText}
                        onChange={(e) => {
                            setMessageText(e.target.value)
                        }}
                    />

                    <Button
                        className="mx-3 !rounded-lg"
                        icon={FiSend}
                        disabled={messageText.trim() === "" || streamingId !== ""}
                        variant="primary"
                        onClick={send}
                    />
                </div>
                <footer
                    className="text-center text-sm text-gray-700 dark:text-gray-300 px-4 pb-6">
                    ©️{new Date().getFullYear()}&nbsp; Based on APIs provided by the third party
                </footer>
            </div>
        </div>
    )

}