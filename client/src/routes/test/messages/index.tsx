import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ConversationsList } from "@/components/test/converstaions-list";

export const Route = createFileRoute("/test/messages/")({
  component: RouteComponent,
});

interface User {
  id: number;
  name: string;
  initials?: string;
}

interface Message {
  text: string;
  sender: "me" | "them";
}

interface Conversation {
  id: number;
  initials: string;
  name: string;
  preview: string;
  time: string;
  unread: number;
}

function RouteComponent() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [text, setText] = useState("");

  // ✅ NEW: conversations state (instead of static sidebar)
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      initials: "CM",
      name: "Chanda Mutale",
      preview: "Please review the assignment",
      time: "9:42 am",
      unread: 3,
    },
    {
      id: 7,
      initials: "KM",
      name: "Kasonde Mulenga",
      preview: "Can you share the reading list?",
      time: "Mar 22",
      unread: 2,
    },
  ]);

  // ✅ Load sample messages
  useEffect(() => {
    if (!selectedUser) return;

    if (!messages[selectedUser.id]) {
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          { text: "Hello 👋", sender: "them" },
          { text: "How can I help you?", sender: "them" },
        ],
      }));
    }
  }, [selectedUser]);

  const handleSend = () => {
    if (!text.trim() || !selectedUser) return;

    const newMsg: Message = {
      text,
      sender: "me",
    };

    // ✅ Update chat messages
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [
        ...(prev[selectedUser.id] || []),
        newMsg,
      ],
    }));

    // ✅ Update sidebar preview + move to top
    setConversations((prev) => {
      const updated = prev.map((c) =>
        c.id === selectedUser.id
          ? {
              ...c,
              preview: text,
              unread: 0,
              time: "Now",
            }
          : c
      );

      const selected = updated.find((c) => c.id === selectedUser.id);
      const others = updated.filter((c) => c.id !== selectedUser.id);

      return selected ? [selected, ...others] : updated;
    });

    setText("");
  };

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDEBAR */}
      <ConversationsList
        conversations={conversations}
        onSelectUser={setSelectedUser}
      />

      {/* RIGHT CHAT PANEL */}
      <div className="flex-1 flex flex-col bg-white">
        {!selectedUser ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a conversation
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-4 border-b font-semibold">
              {selectedUser.name}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {(messages[selectedUser.id] || []).length === 0 ? (
                <p className="text-gray-400 text-sm">
                  No messages yet
                </p>
              ) : (
                (messages[selectedUser.id] || []).map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-blue-500 text-white ml-auto rounded-br-none"
                        : "bg-gray-200  rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border px-2 py-2 rounded"
                placeholder="Type message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}