import { Chat } from "@/types/chatd"
import { useEffect, useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrash, PiTrashBold } from "react-icons/pi"

type Props = {
    item: Chat
    selected: boolean
    onSelected: (chat: Chat) => void
}

export default function ChatItem({ item, selected, onSelected }: Props) {
    // Flow of edit: Select the chat->Press the "edit" button of the chat->Press the check button or cancel button
    // Flow of delete: Select the chat->Press the "delete" button of the chat->Press the check button or cancel button
    const [editing, setEditing] = useState(false)//If press edit button, the chat will become editing
    const [deleteing, setDeleting] = useState(false) //If press delete button, the chat will become deleteing
    
    //When selected is changed, setEditing/setDeleting(false) will be triggered
    //When we switch to other chats(select other chats), the current selected chat's status should be reset
    useEffect(() => {
        setEditing(false)
        setDeleting(false)
    }, [selected])
    return (
        <li
            onClick={() => {
                // parent component handles this item(onSelect is a function as a prop)
                onSelected(item)
            }}
            key={item.id}
            // The cursor will become a small hand when hovering over the element
            className={`relative flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800
            ${selected ? "bg-gray-800" : ""}
        `}
        >
            <div>
                {/* The logo in the chat */}
                {deleteing ? <PiTrashBold /> : <PiChatBold />}
            </div>

            {/* In editing mode, it should display an input */}
            {editing ? <input
                autoFocus={true}
                className="flex-1 min-w-0 bg-transparent outline-none"
                defaultValue={item.title} /> :
                //  Grow to fill the parent item's space, no wrap(next line), hide the overflow content 
                <div className='relative flex-1 whitespace-nowrap overflow-hidden'>
                    {item.title}

                    <span
                        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${selected
                            ? "from-gray-800"
                            : "from-gray-900"
                            }`}
                    ></span>
                </div>}



            {/* Operation Button */}
            {selected && <div className="absolute right-1 flex">
                {
                    editing || deleteing? (<>
                        {/* Edit Button */}
                        <button
                            onClick={(e) => {

                                if(deleteing){
                                    console.log("deleted")
                                }else{
                                    console.log("edited")
                                }
                                setEditing(false)
                                setDeleting(false)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <MdCheck />
                        </button>
                        {/* Delete Button */}
                        <button
                            onClick={(e) => {
                                console.log("Reset")
                                setDeleting(false)
                                setEditing(false)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <MdClose />
                        </button>

                    </>) : (<>
                        {/* Edit Button */}
                        <button
                            onClick={(e) => {
                                setEditing(true)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <AiOutlineEdit />
                        </button>
                        {/* Delete Button */}
                        <button
                            onClick={(e) => {
                                setDeleting(true)
                                e.stopPropagation()
                            }}
                            className="p-1 hover:text-white">
                            <MdDeleteOutline />
                        </button>

                    </>)
                }

            </div>}
        </li>
    )

}