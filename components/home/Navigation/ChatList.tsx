import { groupByDate } from "@/components/common/util";
import { Chat } from "@/types/chatd";
import { useMemo, useState } from "react";
import ChatItem from "./ChatItem";
import { exampleChatList } from "@/data/chatList";


export default function ChatList(){
    const [chatList, setChatList] =useState<Chat[]>(exampleChatList)
    const [selectedChat, setSelectedChat] =useState<Chat>()
    const groupList = useMemo(()=>{
        return groupByDate(chatList)
    },[chatList])
    return (
        <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
            {groupList.map(([date, list])=>{
                return (
                    <div key={date}>
                        {/* Title of the chat group */}
                        {/* Use sticky to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen. */}
                        <div className="sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500">
                            {date}
                        </div>
                        {/* Chat Item List */}
                        <ul>
                            {list.map((item)=>{
                                const selected = selectedChat?.id === item.id
                                return <ChatItem key={item.id} item={item} selected={selected} onSelected={(chat)=>{
                                    setSelectedChat(chat)
                                }}/>
                            })}
                        </ul>
                </div>)

            })}


        </div>
        )
    

}