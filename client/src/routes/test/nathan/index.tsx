import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/test/nathan/')({
  component: RouteComponent,
})

function RouteComponent() {
var [number, setnumber] = useState(10)

  return <div className='flex items-center justify-center h-screen'>
    <button className='border p-2 border-gray-500 rounded-xl' onClick={()=> setnumber(--number)}>decrement {number}</button>
     </div>
}
