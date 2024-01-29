import { exampleMessageList } from "@/data/messageList"
import { Message } from "@/types/chat"
import { SiOpenai } from "react-icons/si"
import Markdown from "@/components/common/Markdown"
import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer"
import { useEffect } from "react"
export default function MessageList() {
    const {
        state: { messageList, streamingId, selectedChat },
        dispatch
    } = useAppContext()


    // Get message list by a chatId
    async function getData(chatId: string) {
        const response = await fetch(`api/message/list?chatId=${chatId}`, {
            method: "GET"
        })

        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        const { data } = await response.json()
        
        //get message list now, then we can update the global message list
        dispatch({
            type: ActionType.UPDATE,
            field: "messageList",
            value: data.list
        })
    }

    //Get the following message list, when we select a new chat
    useEffect(()=>{
        if(selectedChat){
            getData(selectedChat.id)
        }else{
            dispatch({
                type: ActionType.UPDATE,
                field: "messageList",
                value: []
            })
        }
    },[selectedChat])

    return (
        <div className="w-full pt-10 pb-48 dark:text-gray-300">
            <ul>
                {
                    messageList.map((message) => {
                        const isUser = message.role === "user"
                        // Based on the message sender, it has different background color
                        return <li key={message.id} className={`${isUser
                            ? "bg-white dark:bg-gray-800"
                            : "bg-gray-50 dark:bg-gray-700"
                            }`}>
                            <div className="w-full max-w-4xl mx-auto flex space-x-6 px-4 py-6 text-lg">
                                {/* User/Assistant Logo */}
                                <div className="text-3xl leading-[1]">
                                    {message.role === "user" ? (
                                        "🐯"
                                    ) : (
                                        <SiOpenai />
                                    )}
                                </div>
                                {/* Message style: fill the rest of the space */}
                                <div className="flex-1">
                                    <Markdown>{`${message.content}${message.id === streamingId ? "▍" : ""
                                        }`}</Markdown>
                                </div>
                            </div>
                        </li>
                    })
                }

            </ul>

        </div>
    )
}