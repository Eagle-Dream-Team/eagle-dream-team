import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/tutor/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello tutor!</div>;
}
