import type { Message } from "@/models/message";

export function MessageBubble({ message }: { message: Message }) {
  return (
    <div className={`flex ${message.mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
          message.mine
            ? "bg-neutral-800 text-neutral-50 rounded-br-none"
            : "bg-neutral-100 text-neutral-800 rounded-tl-none"
        }`}
      >
        <div className="flex items-end gap-2">
          <p>{message.content}</p>
          <p className="text-[10px] text-neutral-400 whitespace-nowrap shrink-0">
            {new Date(message.sent_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
