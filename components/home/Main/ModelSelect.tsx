import { useAppContext } from "@/components/AppContext"
import { ActionType } from "@/reducers/AppReducer"
import { ACTION } from "next/dist/client/components/app-router-headers"
import { PiLightningFill, PiShootingStarFill } from "react-icons/pi"

//GPT-3.5/4.0 Select
export default function ModelSelect() {
    const models = [
        {
            id: "gpt-3.5-turbo",
            name: "GPT-3.5",
            icon: PiLightningFill
        },
        {
            id: "gpt-4",
            name: "GPT-4",
            icon: PiShootingStarFill
        }
    ]
    const {
        state: { currentModel },
        dispatch
    } = useAppContext()
    return <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
        {
            models.map((item) => {
                const selected = item.id === currentModel
                return <button
                    onClick={() => {
                        dispatch({
                            type: ActionType.UPDATE,
                            field: "currentModel",
                            value: item.id
                        })
                    }}

                    key={item.id}
                    className={`group hover:text-gray-900 hover:dark:text-gray-100 flex justify-center items-center space-x-2 py-2.5 min-w-[148px] text-sm font-medium border rounded-lg
                        ${selected ? "border-gray-200 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" :
                            "border-transparent text-gray-500"}
                    `}
                >   
                {/* Color when the mouse is on the button, transition to a color and its trasition time in ms*/}
                    <span className={`group-hover:text-[#26cf83] transition-colors duration-1000 ${selected ? "text-[#26cf83" : ""}`}>
                        <item.icon />
                    </span>
                    <span>{item.name}</span>
                </button>
            }

            )
        }
    </div>
}