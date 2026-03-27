import { createFileRoute } from '@tanstack/react-router'
import { SignInForm } from './demos/-sign-in-form'
import { MyAccount } from './demos/-my-account'
import { Allocations } from './demos/-allocations'

export const Route = createFileRoute('/test/ryan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='flex justify-center p-4 m-2 mt-0 border-b border-gray-400 shadow'>
        <h1 className='text-2xl text-gray-700'>&lt;- Demos -&gt;</h1>
      </div>
      <MyAccount />
      <SignInForm />
      <Allocations />
    </>
  )
}
