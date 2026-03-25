import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/ryan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/test/ryan/"!</div>
}
