import { EagleIcon } from "./eagle-icon";

export function EagleTitle({ className = "" }: any) {
    return <>
        <div className={"flex justify-center items-center bg-mist-900/95 border border-mist-700 backdrop-blur-xl p-5 rounded-4xl text-white mb-8 " + className}>
            <EagleIcon className={"w-18 ml-1 mr-2"} />
            <div className="ml-2 mr-2">

                <h1 className={"font-semibold text-[max(min(6vw,2em),1em)]"}>Eagle University Portal</h1>
                <p className="opacity-70 text-right text-[max(min(4vw,0.9em),0.8em)]">Where Innovation Breeds Excellence </p>
            </div>
        </div>
    </>
}