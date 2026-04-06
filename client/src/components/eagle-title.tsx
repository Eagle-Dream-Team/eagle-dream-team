import { EagleIcon } from "./eagle-icon";

export function EagleTitle({ className = "" }: any) {
    // className={className + ' w-10'}
    return <>
        <div className={"flex justify-center items-center bg-mist-900/95 border border-mist-700 backdrop-blur-xl p-8 rounded-4xl " + className}>
            <EagleIcon className={"w-18"} />
            <h1 className={"font-semibold text-3xl ml-4"}>Eagle University Portal</h1>
        </div>
    </>
}