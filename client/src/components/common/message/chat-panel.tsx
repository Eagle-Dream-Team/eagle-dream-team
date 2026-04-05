import { useQuery } from "@tanstack/react-query";
import type { Conversation, Message } from "@/models/message";
import { getMessages, markAsRead } from "@/services/common/messages";
import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";
import { getUser } from "@/services/auth";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

interface Props {
  conversation: Conversation;
  onBack?: () => void;
}

export function ChatPanel({ conversation, onBack }: Props) {
  const peerId = conversation.peer.user_id;

  const currentUser = getUser();

  const { data, isLoading } = useQuery({
    queryKey: ["messages", peerId],
    queryFn: () =>
      getMessages(peerId, currentUser!.sub, { page: 1, limit: 30 }),
    refetchInterval: 10_000,
  });
  const messages: Message[] = data?.data ?? [];

  useEffect(() => {
    if (messages.length === 0) return;
    const latestUnread = messages.find((m) => !m.mine && !m.is_read);
    if (latestUnread) {
      markAsRead(latestUnread.message_id);
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-white border-t overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="md:hidden text-gray-500 hover:text-gray-800 mr-1"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
          {conversation.peer.first_name[0]}
          {conversation.peer.last_name[0]}
        </div>
        <p className="font-semibold text-sm text-gray-900">
          {conversation.peer.first_name} {conversation.peer.last_name}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse gap-1">
        {isLoading ? (
          <p className="text-xs text-gray-400 text-center">Loading...</p>
        ) : messages.length === 0 ? (
          <p className="text-xs text-gray-400 text-center">No messages yet</p>
        ) : (
          messages.map((m) => <MessageBubble key={m.message_id} message={m} />)
        )}
      </div>

      {/* Input */}
      <MessageInput peerId={peerId} />
    </div>
  );
}
