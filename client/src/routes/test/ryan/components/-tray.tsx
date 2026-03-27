import { ChevronDown } from "lucide-react";
import { useState } from "react";


export function Tray({ title, children }: any) {

    const [isMinimized, setIsMinimized] = useState(true);

    return (
        <>
            <div className='flex flex-wrap justify-center m-2 bg-gray-100 border-b border-gray-400 shadow'>
                <div onClick={() => { setIsMinimized(!isMinimized) }} className={"flex w-full p-4 border-b hover:bg-white " + (isMinimized ? "" : "border-gray-300")}>
                    <h2 className="grow text-xl text-purple-700 ml-1 select-none">{title}</h2>
                    <div className={"flex-none text-purple-700 " + (isMinimized ? "rotate-180" : "")}><ChevronDown /></div>
                </div>
                <div className={"w-full overflow-hidden " + (isMinimized ? "h-0" : "h-3xl")}>
                    <div className="p-8 min-w-full flex justify-center-safe overflow-x-auto">
                        {children}
                    </div>
                </div>
            </div >
        </>
    )
}
