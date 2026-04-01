import { createFileRoute } from '@tanstack/react-router'
import { SignInForm } from './demos/-sign-in-form'
import { MyAccount } from './demos/-my-account'
import { Allocations } from './demos/-allocations'
import { LucideAlignEndVertical, LucideAlignStartVertical } from 'lucide-react'

export const Route = createFileRoute('/test/ryan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='flex justify-center p-4 m-2 mt-0 border-b border-gray-400 shadow'>
        <LucideAlignEndVertical className='translate-y-1 stroke-gray-400'/><h1 className='text-2xl text-gray-700 ml-1 mr-1'> Demos</h1><LucideAlignStartVertical className='translate-y-1 stroke-gray-400'/>
      </div>
      <MyAccount />
      <SignInForm />
      <Allocations />
    </>
  )
}
