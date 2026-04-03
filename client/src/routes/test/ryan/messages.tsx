import { createFileRoute } from '@tanstack/react-router'
import { message } from 'antd'
import axios from 'axios'
import { LucideSendHorizontal } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type message = {
    message_id: string
    sender_id: string;
    receiver_id: string;
    content: string;
    mine?: boolean;
};

type receiver = {
    user_id: string;
    name: string;
};

type allocation = {
    allocation_id: number;
    user_id: string;
    first_name: string;
    last_name: string;
    name: string;
};

function Bubble({ children = '', mine = false }) {
    return <>
        <div className={'p-2 pr-4 pl-4 rounded-xl mb-2 w-fit ' + (mine ? 'bg-red-400 rounded-br-none justify-self-end pr-6' : 'bg-gray-200 rounded-tl-none pl-6')}>
            {children}
        </div>
    </>
}

function Card({ allocation, active, onClick }: { allocation: allocation, active: boolean, onClick: Function }) {
    return <>
        <div onClick={() => onClick()} className={'text-ellipsis whitespace-nowrap w-full p-3 mb-2 rounded-xl border hover:bg-blue-300 active:bg-blue-200 ' + (active ? 'border-blue-700 bg-blue-400' : 'border-gray-300')}>
            {allocation.name}
        </div>
    </>
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
let myId = "";
let rawAllocations: any[] = [];

try {
    const curentUserRes = await axios.get(serverUrl + `/user/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    });

    myId = curentUserRes.data.user_id;

    const curentAllocsRes = await axios.get(serverUrl + `/ryan-test/myCurrentAllocations`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    });

    rawAllocations = curentAllocsRes.data;

} catch (e) {
    // const b = document.querySelector('html');
    // b && (b.innerHTML = e + '');
}


function RouteComponent() {
    const [messages, setMessages] = useState<message[]>([]);
    let receiverIdRef =  useRef("");
    const [receiver, setReceiver] = useState<receiver>();
    const [allocations, setAllocations] = useState<allocation[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    async function updateMessages(receiverUserId?: string) {
        const rId = (receiverUserId ? receiverUserId : receiverIdRef.current)
        if (rId) {
            console.log('Checking for new messages')
            const res = await axios.get(serverUrl + `/message/conversation/${rId}/unpaginated`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
            })
            setMessages(res.data)
        } else {
            console.log([receiverIdRef,receiverUserId,rId])
        }
    }

    function scrollToBottom(smooth = true) {
        if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: (smooth ? "smooth" : "instant") });
    };

    async function processRawAllocs() {
        rawAllocations.forEach(async rawAlloc => {

            let user2Id = "";

            if (rawAlloc.tutor_id == myId) {
                user2Id = rawAlloc.student_id
            } else {
                user2Id = rawAlloc.tutor_id
            }

            let user2 = (await axios.get(serverUrl + `/user/${user2Id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
            })).data;

            let alloc: allocation = {
                allocation_id: rawAlloc.allocation_id,
                user_id: user2Id,
                first_name: user2.first_name,
                last_name: user2.last_name,
                name: user2.first_name + ' ' + user2.last_name,
            }

            setAllocations(allocations => [...allocations, alloc]);
        });
    }

    let initialized = useRef<boolean>(false);
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            processRawAllocs();
        }

        const id = setInterval(async () => { await updateMessages() }, 4000);
        return () => clearInterval(id)
    }, [])

    const [text, setText] = useState('');

    async function send() {
        const data = {
            receiver_id: receiverIdRef.current,
            content: text.trim(),
        }

        if (text.trim()) {
            setMessages([{
                message_id: 'test' + lastId++,
                sender_id: '',
                receiver_id: receiverIdRef.current,
                content: text.trim(),
                mine: true,
            }, ...messages]);
            scrollToBottom();
            setText('');

            axios.post(serverUrl + '/message/send', data, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } })
        }
    }

    async function chatWith(allocation: allocation) {
        await updateMessages(allocation.user_id);
        receiverIdRef.current = allocation.user_id;
        setReceiver({ user_id: allocation.user_id, name: allocation.name })
        setTimeout(() => {
            scrollToBottom(false)
        }, 0);
    }

    return <>
        <div hidden={localStorage.getItem('access_token') != null} className='fixed h-full w-full flex flex-col justify-center bg-black/50'>
            <div className=' w-full p-5 border-t border-b border-red-900 bg-red-400 text-center align-text'>You are not logged in. Please log in to acces this page.</div>
        </div>
        <div className='flex max-h-dvh h-dvh overflow-hidden p-2 pt-0'>
            <div className='flex-none w-50 mr-2 border overflow-x-hidden overflow-y-auto border-gray-300 mt-2 mb rounded-xl p-2'>
                {
                    allocations.map(a => (
                        <Card allocation={a} active={a.user_id == receiverIdRef.current} onClick={() => chatWith(a)} key={a.allocation_id} />
                    ))
                }
            </div>
            <div className='grow h-full flex flex-col'>
                <div className='flex-none bg-gray-100 border border-gray-300 mt-2 mb p-2 text-xl text-center rounded-xl'>{receiver ? receiver.name : ". . ."}</div>
                <div className='scroll-smooth grow border overflow-x-hidden overflow-y-auto border-gray-300 mt-2 mb rounded-xl p-4'>
                    {
                        messages.toReversed().map(m => (
                            <Bubble key={m.message_id} mine={m.mine}>{m.content}</Bubble>
                        ))
                    }
                    <div ref={messagesEndRef} className='' />
                </div>
                <div className='flex-none flex h-fit bg-gray-100 border border-gray-300 mt-2 mb rounded-xl'>
                    <input onChange={e => setText(e.target.value)} value={text} type='text' spellCheck='true' className='bg-white grow border border-gray-600 rounded-xl p-1 pl-3 pr-3 m-2'></input>
                    <button onClick={() => send()} className='border border-red-900 bg-red-400 hover:not-active:bg-red-300 active:bg-red-200 m-2 ml-0 p-2 rounded-xl w-15 flex justify-center'><LucideSendHorizontal className='stroke-red-900 stroke-1' /></button>
                </div>
            </div>
        </div>
    </>
}

export const Route = createFileRoute('/test/ryan/messages')({
    component: RouteComponent,
})
