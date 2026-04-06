import { EagleIcon } from "./eagle-icon";

export function EagleTitle({ className = "" }: any) {
    // className={className + ' w-10'}
    return <>
        <div className={"flex justify-center items-center bg-mist-900/95 border border-mist-700 backdrop-blur-xl p-6 rounded-4xl text-white mb-8 " + className}>
            <EagleIcon className={"w-18"} />
            <div className="ml-4">

                <h1 className={"font-semibold text-3xl"}>Eagle University Portal</h1>
                <p className="opacity-70 text-right text-[0.9em]">Where Innovation Breeds Excellence </p>
            </div>
        </div>
    </>
}