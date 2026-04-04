import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SendHorizonal } from "lucide-react";
import { sendMessage } from "@/services/common/messages";

export function MessageInput({ peerId }: { peerId: string }) {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => sendMessage(peerId, text),
    onSuccess: () => {
      setText("");
      queryClient.invalidateQueries({ queryKey: ["messages", peerId] });
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });

  return (
    <div className="p-3 border-t flex gap-2 items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && !isPending && text.trim() && mutate()
        }
        className="flex-1 border px-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-neutral-500"
        placeholder="Type a message..."
      />
      <button
        onClick={() => text.trim() && mutate()}
        disabled={isPending || !text.trim()}
        className="bg-neutral-600 hover:bg-neutral-700 disabled:opacity-50 text-white p-2 rounded-lg transition-all"
      >
        <SendHorizonal size={16} />
      </button>
    </div>
  );
}
