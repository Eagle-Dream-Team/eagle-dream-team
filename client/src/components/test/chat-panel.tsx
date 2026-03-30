import { ConversationsList } from "./conversations-list";
import { useState } from "react";


interface User {
  id: number; // ✅ FIXED (was string)
  name: string;
}

interface Message {
  text: string;
  sender: "me" | "them"; // ✅ better typing
}

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || !selectedUser) return;

    const newMsg: Message = {
      text,
      sender: "me",
    };

    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [
        ...(prev[selectedUser.id] || []),
        newMsg,
      ],
    }));

    setText("");
  };

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDEBAR */}
      <ConversationsList onSelectUser={setSelectedUser} />

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
              {(messages[selectedUser.id] || []).map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-xs px-3 py-2 rounded ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
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