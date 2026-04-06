import type { Conversation } from "@/models/message";
import { Input } from "antd";

export function ConversationsList({
  onSelectUser,
  conversations,
  isLoading,
  activeConversationId,
}: {
  onSelectUser: (c: Conversation) => void;
  conversations: Conversation[];
  isLoading?: boolean;
  activeConversationId?: string;
}) {
  return (
    <div className="h-full flex flex-col border-r border-t bg-white">
      
      {/* Header */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <h2 className="text-sm font-semibold mb-2 text-gray-800">Messages</h2>
        <Input placeholder="Search..." className="h-8 text-xs rounded-md" />
      </div>

      {isLoading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-3 px-4 py-3 border-b animate-pulse"
          >
            <div className="w-11 h-11 rounded-full bg-gray-200 shrink-0" />
            <div className="flex-1 min-w-0 space-y-2 pt-1">
              <div className="flex justify-between gap-2">
                <div className="h-3 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-10" />
              </div>
              <div className="h-3 bg-gray-200 rounded w-4/5" />
            </div>
          </div>
        ))
      ) : (
        <div className="flex-1 overflow-y-auto">
          
          {conversations.length === 0 && (
            <div className="p-4 text-sm text-gray-400 text-center">
              No conversations yet
            </div>
          )}

          {conversations.map((c) => {
        const peer = c.peer || {};

  return (
    <div
      key={String(c.allocation_id)}
      onClick={() => onSelectUser(c)}
      className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b transition-all"
    >
      {/* Avatar */}
      <div className="w-11 h-11 rounded-full bg-gray-200 border flex items-center justify-center font-bold text-sm text-gray-700 shrink-0">
        {peer.first_name?.[0] ?? ""}
        {peer.last_name?.[0] ?? ""}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold text-sm text-gray-900 truncate">
            {peer.first_name ?? ""} {peer.last_name ?? ""}
          </p>

          <p className="text-[11px] text-gray-500 whitespace-nowrap">
            {c.last_message
              ? new Date(c.last_message.sent_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-1">
          <p className="text-xs text-gray-600 truncate">
            {c.last_message?.mine && (
              <span className="text-gray-400">You: </span>
            )}
            {c.last_message?.content ?? "No messages yet"}
          </p>

          {c.unread_count > 0 && (
            <span className="bg-neutral-800 text-neutral-50 text-[10px] font-bold px-2 py-0.5 rounded-full min-w-5 text-center shrink-0">
              {c.unread_count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
})}
        </div>
      )}
    </div>
  );
}