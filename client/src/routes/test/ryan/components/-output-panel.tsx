import { useState } from "react";
const colors: any = {
    red: "text-red-800",
    green: "text-green-800",
    blue: "text-blue-800",
    gray: "text-gray-800",
}
export function OutputPanel({ text, color = "gray" }: { text: string, color: string }) {
    let [lastText, setLastText] = useState("");

    if (text && (lastText !== text)) {
        setLastText(text)
    }

    return (
        <>
            <div className={"flex-none duration-700 delay-300 overflow-hidden " + (text ? "w-70 pl-4 opacity-100" : "w-0 opacity-0")}>
                <div className={`pt-4 pl-8 pr-8 opacity-100 w-70 whitespace-pre-line wrap-break-word ${colors[color]}`}>{lastText}</div>
            </div>
        </>
    )
}
