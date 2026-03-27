import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/staff/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_protected/staff/home"!</div>;
}
