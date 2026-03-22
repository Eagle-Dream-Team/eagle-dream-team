import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/staff/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello staff member</div>;
}
