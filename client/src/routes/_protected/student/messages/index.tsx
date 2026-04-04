import { ChatPanel } from "@/components/common/chat-panel";
import { ConversationsList } from "@/components/test/converstaions-list";
import type { Conversation } from "@/models/message";
import { getConversations } from "@/services/common/messages";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_protected/student/messages/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selected, setSelected] = useState<Conversation | null>(null);

  const { data: conversations = [] } = useQuery({
    queryKey: ["conversations"],
    queryFn: getConversations,
    refetchInterval: 30_000,
  });

  return (
    <>
      <div className="-m-6 flex h-[calc(100vh-4rem)]">
        <ConversationsList
          conversations={conversations}
          onSelectUser={(c) => {
            // console.log(c);
            setSelected(c);
          }}
        />

        {selected ? (
          <ChatPanel conversation={selected} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm border-t">
            Select a conversation
          </div>
        )}
      </div>
    </>
  );
}
