import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ConversationsList } from "@/components/test/converstaions-list";
import type { Conversation } from "@/models/message";

export const Route = createFileRoute("/test/messages/")({
  component: RouteComponent,
});

interface MockMessage {
  text: string;
  sender: "me" | "them";
}

function RouteComponent() {
  const [selectedUser, setSelectedUser] = useState<Conversation | null>(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Record<string, MockMessage[]>>({});

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      allocation_id: "1",
      peer: {
        user_id: "user-1",
        first_name: "Chanda",
        last_name: "Mutale",
        email: "chanda@example.com",
        role: "student",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      last_message: {
        message_id: 1,
        sender_id: "user-1",
        receiver_id: "me",
        content: "Please review the assignment",
        sent_at: new Date().toISOString(),
        is_read: false,
        mine: false,
        file_id: null,
      },
      unread_count: 3,
    },
    {
      allocation_id: "7",
      peer: {
        user_id: "user-7",
        first_name: "Kasonde",
        last_name: "Mulenga",
        email: "kasonde@example.com",
        role: "student",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      last_message: {
        message_id: 2,
        sender_id: "me",
        receiver_id: "user-7",
        content: "Can you share the reading list?",
        sent_at: new Date().toISOString(),
        is_read: true,
        mine: true,
        file_id: null,
      },
      unread_count: 2,
    },
  ]);

  // ✅ Load sample messages
  useEffect(() => {
    if (!selectedUser) return;

    if (!messages[selectedUser.allocation_id]) {
      setMessages((prev) => ({
        ...prev,
        [selectedUser.allocation_id]: [
          { text: "Hello 👋", sender: "them" },
          { text: "How can I help you?", sender: "them" },
        ],
      }));
    }
  }, [selectedUser]);

  const handleSend = () => {
    if (!text.trim() || !selectedUser) return;

    const newMsg: MockMessage = { text, sender: "me" };

    // ✅ Update chat messages
    setMessages((prev) => ({
      ...prev,
      [selectedUser.allocation_id]: [
        ...(prev[selectedUser.allocation_id] || []),
        newMsg,
      ],
    }));

    // ✅ Update sidebar preview + move to top
    setConversations((prev) => {
      const updated = prev.map((c) =>
        c.allocation_id === selectedUser.allocation_id
          ? {
              ...c,
              last_message: {
                ...c.last_message!,
                content: text,
                mine: true,
                sent_at: new Date().toISOString(),
              },
              unread_count: 0,
            }
          : c,
      );

      const selected = updated.find(
        (c) => c.allocation_id === selectedUser.allocation_id,
      );
      const others = updated.filter(
        (c) => c.allocation_id !== selectedUser.allocation_id,
      );

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
              {selectedUser.peer.first_name} {selectedUser.peer.last_name}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {(messages[selectedUser.allocation_id] || []).length === 0 ? (
                <p className="text-gray-400 text-sm">No messages yet</p>
              ) : (
                (messages[selectedUser.allocation_id] || []).map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-blue-500 text-white ml-auto rounded-br-none"
                        : "bg-gray-200 rounded-tl-none"
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
