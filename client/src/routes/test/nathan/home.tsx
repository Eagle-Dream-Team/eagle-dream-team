import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/nathan/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/test/gabriel/home"!</div>
}
