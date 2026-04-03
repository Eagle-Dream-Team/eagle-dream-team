import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { Download, Upload } from 'lucide-react'
import type { title } from 'process';
import { useEffect, useRef, useState } from 'react'
const serverUrl = import.meta.env.VITE_API_URL;

function FileCard({ file }: any) {
    return <>
        <div className='flex border border-gray-300 mb-2 rounded-xl p-2 pr-3 pl-3'>
            <div className='grow'>
                <a className=' text-blue-700 hover:not-active:underline' href={file.file_url} target='_blank'>
                    {file.title}
                </a>
            </div>
            <a href={file.file_url} download={file.title} className='flex-none'>
                <Download className='stroke-blue-700 stroke-1 w-10 hover:not-active:stroke-blue-500' />
            </a>
        </div>
    </>
}

function RouteComponent() {
    const [file, setFile] = useState<File | null>();
    const [files, setFiles] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    let initialized = useRef<boolean>(false);
    useEffect(() => {
        if (!initialized.current) {
            updateFileList()
            initialized.current = true;
        }

    }, [])

    async function updateFileList() {
        const res = await axios.get(serverUrl + `/file/all/unpaginated`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })

        setFiles(res.data);
    }

    async function submit() {
        if (file) {
            const data = new FormData();
            const blob = new Blob([file], { type: file.type });
            data.append("file", blob);
            data.append("title", file.name);
            setIsLoading(true)
            await axios.post(serverUrl + '/file/upload', data, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
            await updateFileList()
            setIsLoading(false)
        }
    }

    return <>
        <div hidden={localStorage.getItem('access_token') != null} className='fixed h-full w-full flex flex-col justify-center bg-black/50'>
            <div className=' w-full p-5 border-t border-b border-red-900 bg-red-400 text-center align-text'>You are not logged in. Please log in to acces this page.</div>
        </div>
        <div className='flex max-h-dvh h-dvh overflow-hidden p-2 pt-0'>
            <div className='flex-none flex flex-col justify-center items-center mr-2 border overflow-x-hidden overflow-y-auto border-gray-300 mt-2 mb rounded-xl p-2'>
                <input onChange={(e) => { if (e.target.files) setFile(e.target.files[0]) }} type="file" className=' p-2 w-60 file:mr-2 file:p-2 file:rounded-xl hover:file:bg-blue-50 file:text-blue-700 file:border file:border-blue-700 file:bg-blue-100' />
                <div>
                    <button onClick={() => { submit() }} hidden={isLoading || !file} className='mt-4 p-2 flex flex-none w-20 justify-center border rounded-xl border-blue-700 bg-blue-400 hover:bg-blue-300 active:bg-blue-200'><Upload className='stroke-white stroke-2' /></button>
                    <p hidden={!isLoading} className='text-blue-700'>Loading...</p>
                </div>
            </div>
            <div className='grow h-full flex flex-col'>
                <div className='flex-none bg-gray-100 border border-gray-300 mt-2 mb p-2 text-xl text-center rounded-xl'>Uploaded Files</div>
                <div className='scroll-smooth grow border overflow-x-hidden overflow-y-auto border-gray-300 mt-2 mb rounded-xl p-2'>
                    {files.map(f => <FileCard file={f} />)}
                </div>
            </div>
        </div>
    </>
}


export const Route = createFileRoute('/test/ryan/files')({
    component: RouteComponent,
})