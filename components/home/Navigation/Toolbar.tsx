import { useAppContext } from "@/components/AppContext"
import Button from "@/components/common/Button"
import { ActionType } from "@/reducers/AppReducer"
import {MdDarkMode, MdInfo, MdLightMode } from "react-icons/md"

export default function Toolbar() {
    const {
        state: {themeMode},
        dispatch
    } = useAppContext()
    return (
        // The tool bar should locate in the bottom of the page
        <div className='absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between'>
            {/* Switch Dark/Light Mode Button */}
            <Button 
                icon={themeMode === "dark" ? MdDarkMode:MdLightMode}
                variant="text"
                onClick={()=>{
                    dispatch({type: ActionType.UPDATE, field:"themeMode",value: themeMode==="dark"?"light":"dark"})
                }}
            />
            
            {/* Todo */}
            <Button 
                icon={MdInfo} 
                variant="text"
            />
        </div>
    )
}
