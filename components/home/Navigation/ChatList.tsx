import { groupByDate } from "@/components/common/util";
import { Chat } from "@/types/chat";
import { useEffect, useMemo, useRef, useState } from "react";
import ChatItem from "./ChatItem";
import { exampleChatList } from "@/data/chatList";
import { useEventBusContext } from "@/components/EventBusContext";
import { useAppContext } from "@/components/AppContext";
import { ActionType } from "@/reducers/AppReducer";


export default function ChatList() {
    const [chatList, setChatList] = useState<Chat[]>([])
    const pageRef = useRef(1) // get the first page by default
    const groupList = useMemo(() => {
        return groupByDate(chatList)
    }, [chatList])
    const { subscribe, unsubscribe } = useEventBusContext()

    const {
        state: { selectedChat },
        dispatch
    } = useAppContext()
    const loadMoreRef = useRef(null)
    const hasMoreRef = useRef(false)
    const loadingRef = useRef(false)

    async function getData() {
        if(loadingRef.current){
            return
        }
        loadingRef.current = true
        const response = await fetch(`api/chat/list?page=${pageRef.current}`, {
            method: "GET"
        })

        if (!response.ok) {
            console.log(response.statusText)
            return
        }
        
        const { data } = await response.json()
        hasMoreRef.current = data.hasMore

        if (pageRef.current === 1) {
            //if it is the first page, overwrite the list
            setChatList(data.list)
        } else {
            //if other pages, append it to the end
            setChatList((list) => list.concat(data.list))
        }
        pageRef.current++
        loadingRef.current = false
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const callback: EventListener = () => {
            pageRef.current = 1
            getData()
        }
        subscribe("fetchChatList", callback)
        return () => unsubscribe("fetchChatList", callback)
    }, [])

    useEffect(()=>{
        let observer: IntersectionObserver | null = null
        let div = loadMoreRef.current
        if(div){
            observer = new IntersectionObserver((entries)=>{
                // if it has more data
                if(entries[0].isIntersecting && hasMoreRef.current){
                    getData()
                }
            })
            observer.observe(div)
        }
        return ()=>{
            if(observer && div){
                observer.unobserve(div)
            }
        }
    })
    return (
        <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
            {groupList.map(([date, list]) => {
                return (
                    <div key={date}>
                        {/* Title of the chat group */}
                        {/* Use sticky to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. */}
                        <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
                            {date}
                        </div>
                        {/* Chat Item List */}
                        <ul>
                            {list.map((item) => {
                                const selected = selectedChat?.id === item.id
                                return <ChatItem
                                    key={item.id}
                                    item={item}
                                    selected={selected}
                                    onSelected={(chat) => {
                                        // If we selected this chat, use dispatch to update the global state (global selected chat)
                                        dispatch({
                                            type:ActionType.UPDATE,
                                            field:"selectedChat",
                                            value: chat
                                        })
                                    }} />
                            })}
                        </ul>
                    </div>)

            })}
            {/* If this div is loaded, assign itself to the flag "loadMoreRef" */}
            <div ref={loadMoreRef}>&nbsp;</div>
        </div>
    )


}