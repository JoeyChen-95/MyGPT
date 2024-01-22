import { MdOutlineTipsAndUpdates } from "react-icons/md";
import examples from "@/data/examples.json"
import Button from "@/components/common/Button";
import { useMemo, useState } from "react";

export default function Example() {
    const [showFull, setShowFull] = useState(false)
    const list = useMemo(() => {
        if (showFull) {
            return examples
        } else {
            //If do not showFull, only display 7 examples
            return examples.slice(0, 7)
        }
    }, [showFull])
    return (
        <>
            <div className='mt-20 mb-4 text-4xl'>
                <MdOutlineTipsAndUpdates />
            </div>
            <ul className="flex justify-center flex-wrap gap-3.5">
                {list.map((item) => {
                    return (
                        <li key={item.act}>
                            <Button>{item.act}</Button>
                        </li>
                    )
                })
                }

            </ul>
            {
                /*
                After pressing the showFull button, the rest of the example will be displayed,
                and the button also disappear
                */
                !showFull && (
                    <>
                        <p className="p-2">...</p>
                        <div className="flex items-center w-full space-x-2">
                            {/* Divider */}
                            {/* Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size: */}
                            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-600"/>
                            <Button onClick={()=>{
                                setShowFull(true)
                            }}
                            >
                                Show More
                            </Button>
                            {/* Divider */}
                            <hr className="flex-1 border-t border-dotted border-gray-200 dark:border-gray-600"/>
                        
                        </div>
                    </>
                )}
        </>
    )

}