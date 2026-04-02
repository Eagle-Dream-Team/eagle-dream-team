import { createFileRoute } from '@tanstack/react-router'
import { message } from 'antd'
import axios from 'axios'
import { LucideSendHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'

function Bubble({ children = '', mine = false }) {
    return <>
        <div className={'p-2 pr-4 pl-4 rounded-xl mb-2 w-fit ' + (mine ? 'bg-red-300 rounded-br-none justify-self-end pr-10' : 'bg-gray-200 rounded-tl-none pl-10')}>
            {children}
        </div>
    </>
}

type message = {
    message_id: string
    sender_id: string;
    receiver_id: string;
    content: string;
    mine?: boolean;
}

const serverUrl = import.meta.env.VITE_API_URL;


// const messages
//     : {
//         sender_id: string,
//         receiver_id: string,
//         content: string
//     }[] = [
//         {
//             sender_id: '',
//             receiver_id: '',
//             content: 'Test message.',
//         }
//     ]
let lastId = 0;
function RouteComponent() {
    const [messages, setMessages] = useState<message[]>([]);
    const [receiverId, setReceiverId] = useState("89ec7c94-3924-49ad-94c6-d6f6d1aa79b9");

    async function updateMessages() {
        const res = await axios.get(serverUrl + `/message/conversation/${receiverId}/unpaginated`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
        setMessages(res.data)
    }

    useEffect(() => {
        updateMessages();
        const id = setInterval(updateMessages, 8000);
        return () => clearInterval(id)
    }, [])

    const [text, setText] = useState('');

    async function send() {
        const data = {
            receiver_id: receiverId,
            content: text.trim(),
        }

        if (text.trim()) {
            axios.post(serverUrl + '/message/send', data, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })

            setMessages([{
                message_id: 'test' + lastId++,
                sender_id: '',
                receiver_id: receiverId,
                content: text.trim(),
            }, ...messages])

            setText('');
        }
    }

    return <>
        <div hidden={localStorage.getItem('access_token') != null} className='fixed h-full w-full flex flex-col justify-center bg-black/50'>
            <div className=' w-full p-5 border-t border-b border-red-900 bg-red-400 text-center align-text'>You are not logged in. Please log in to acces this page.</div>
        </div>
        <div className='max-h-dvh h-dvh overflow-hidden p-2 pt-0'>
            <div className='h-8/10 border overflow-x-hidden overflow-y-auto border-gray-300 mt-2 mb rounded-xl p-4'>
                {
                    messages.toReversed().map(m => (
                        <Bubble key={m.message_id} mine={m.mine}>{m.content}</Bubble>
                    ))
                }
            </div>
            <div className='flex-none flex h-fit border border-gray-300 mt-2 mb rounded-xl'>
                <input onChange={e => setText(e.target.value)} value={text} type='text' spellCheck='true' className='grow border border-gray-600 rounded-xl p-1 pl-3 pr-3 m-2'></input>
                <button onClick={() => send()} className='border border-red-900 bg-red-400 hover:not-active:bg-red-300 active:bg-red-200 m-2 ml-0 p-2 rounded-xl w-15 flex justify-center'><LucideSendHorizontal className='stroke-red-900 stroke-1' /></button>
            </div>
        </div>
    </>
}

export const Route = createFileRoute('/test/ryan/messages')({
    component: RouteComponent,
})
