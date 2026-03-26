import { useState } from "react";


export function Button({ text, action, loadingText = "Loading..." }: { text: string, action: Function, loadingText: string }) {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className='flex justify-center m-4'>
                <button onClick={async () => {
                    setIsLoading(true);
                    await action();
                    setIsLoading(false);
                }} hidden={isLoading} className="border border-purple-800 bg-purple-500 hover:bg-purple-400 active:bg-purple-300 text-white p-1 pl-2 pr-2 rounded-xl hover:not-active:-translate-y-0.5 duration-20 active:translate-y-0.5 not-active:shadow">{text}</button>
                <div className="p-1 text-purple-700" hidden={!isLoading}>{loadingText}</div>
            </div>
        </>
    )
}
