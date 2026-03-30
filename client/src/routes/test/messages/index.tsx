import { ConversationsList } from "@/components/test/converstaions-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test/messages/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ConversationsList />
    </>
  );
}
