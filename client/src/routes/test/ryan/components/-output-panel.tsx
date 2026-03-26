import { useState } from "react";

export function OutputPanel({ text, color = "gray" }: { text: string, color: string }) {
    let [lastText, setLastText] = useState("");

    if (text && (lastText !== text)) {
        setLastText(text)
    }

    return (
        <>
            <div className={"duration-700 " + (text ? "w-50 opacity-100" : "w-0 opacity-0")}>
                <div className={`w-50 p-4 m-2 ml-12 mr-12 opacity-100 whitespace-pre-line text-${color}-800`}>{lastText}</div>
            </div>
        </>
    )
}
