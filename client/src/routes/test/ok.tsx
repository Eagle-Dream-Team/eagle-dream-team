import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test/ok")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <p className="border">Hello "/test/ok"!</p>
    </div>
  );
}
