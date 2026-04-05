import type { Message } from "@/models/message";
import { Download, Paperclip } from "lucide-react";

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
        {/* File attachment */}
        {message.file && (
          <div
            className={`flex items-center gap-2 mb-1.5 p-2 rounded-lg ${
              message.mine ? "bg-neutral-700" : "bg-neutral-200"
            }`}
          >
            <Paperclip size={13} className="shrink-0" />
            <span className="text-xs truncate max-w-36 flex-1">
              {message.file.title}
            </span>
            <a
              href={message.file.download_url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0"
            >
              <Download size={13} />
            </a>
          </div>
        )}

        {/* Content + time */}
        <div className="flex items-end gap-2">
          {message.content && <p>{message.content}</p>}
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
