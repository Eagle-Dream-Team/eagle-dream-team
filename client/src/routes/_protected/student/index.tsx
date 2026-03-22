import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/student/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello student!</div>;
}
