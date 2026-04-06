export function Background({ className = "" }: any) {
    // className={className + ' w-10'}
    return <>
        <div className={"w-full h-full fixed -z-10 bg-cover " + className}>
            <div className={"w-full h-full backdrop-blur-xs"}></div>
        </div>
    </>
}