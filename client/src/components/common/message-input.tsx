import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SendHorizonal, Paperclip, X } from "lucide-react";
import { sendMessage } from "@/services/common/messages";
import { getFiles } from "@/services/common/file";
import type { AppFile } from "@/models/file";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";

interface Props {
  peerId: string;
}

export function MessageInput({ peerId }: Props) {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState<AppFile | null>(null);
  const [filePickerOpen, setFilePickerOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: filesData } = useQuery({
    queryKey: ["files", "mine"],
    queryFn: () => getFiles({ filter: "mine", limit: 100 }),
    enabled: filePickerOpen,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      sendMessage(peerId, text, selectedFile?.file_id ?? undefined),
    onSuccess: () => {
      setText("");
      setSelectedFile(null);
      queryClient.invalidateQueries({ queryKey: ["messages", peerId] });
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });

  const canSend = !isPending && (text.trim() || selectedFile);

  return (
    <>
      {/* File picker modal */}
      <Modal
        open={filePickerOpen}
        onCancel={() => setFilePickerOpen(false)}
        title="Select a File"
        footer={null}
        destroyOnHidden
      >
        <div className="flex flex-col gap-2 max-h-96 overflow-y-auto py-2">
          {filesData?.data.length === 0 && (
            <p className="text-sm text-neutral-400 text-center py-4">
              No files uploaded yet
            </p>
          )}
          {filesData?.data.map((f) => (
            <div
              key={f.file_id}
              onClick={() => {
                setSelectedFile(f);
                setFilePickerOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <Paperclip size={14} className="text-neutral-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-800 truncate">
                  {f.title}
                </p>
                <p className="text-xs text-neutral-400">
                  {f.file_type?.split("/")[1]?.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <div className="border-t">
        {/* Selected file preview */}
        {selectedFile && (
          <div className="px-3 pt-2 flex items-center gap-2">
            <div className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-1.5 flex-1 min-w-0">
              <Paperclip size={13} className="text-neutral-500 shrink-0" />
              <span className="text-xs text-neutral-700 truncate">
                {selectedFile.title}
              </span>
            </div>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-neutral-400 hover:text-neutral-600"
            >
              <X size={15} />
            </button>
          </div>
        )}

        {/* Input row */}
        <div className="p-3 flex gap-2 items-center">
          <button
            onClick={() => setFilePickerOpen(true)}
            className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
          >
            <Paperclip size={18} />
          </button>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && canSend && mutate()}
            className="flex-1 border px-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-neutral-500"
            placeholder="Type a message..."
          />

          <button
            onClick={() => canSend && mutate()}
            disabled={!canSend}
            className="bg-neutral-600 hover:bg-neutral-700 disabled:opacity-50 text-white p-2 rounded-lg transition-all"
          >
            <SendHorizonal size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
