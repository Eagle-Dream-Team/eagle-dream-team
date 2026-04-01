export function TitledBox({ title, children }: { title: string, children: any }) {
    return (
        <>
            <div className="w-85 flex-none border bg-white border-gray-300 rounded-xl p-4 shadow-xl max-h-fit">
                <h2 className="text-xl text-center text-purple-700 m-2">{title}</h2>
                {children}
            </div>
        </>
    )
}
