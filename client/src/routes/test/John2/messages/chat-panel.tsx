import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ConversationsList } from "@/components/test/conversations-list";

const API = import.meta.env.VITE_API_URL;

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Load messages
  const loadMessages = async (userId: string) => {
    const res = await axios.get(
      `${API}/message/conversation/${userId}/unpaginated`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    setMessages(res.data);
    scrollToBottom();
  };

  // ✅ Select user
  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
    loadMessages(user.user_id);
  };

  // ✅ Send message
  const handleSend = async () => {
    if (!text.trim() || !selectedUser) return;

    const tempMsg = {
      message_id: "temp-" + Date.now(),
      content: text,
      mine: true,
      sent_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempMsg]);
    setText("");
    scrollToBottom();

    await axios.post(
      `${API}/message/send`,
      {
        receiver_id: selectedUser.user_id,
        content: text,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    loadMessages(selectedUser.user_id);
  };

  // ✅ Auto refresh
  useEffect(() => {
    if (!selectedUser) return;

    const interval = setInterval(() => {
      loadMessages(selectedUser.user_id);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedUser]);

  // ✅ Scroll
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDEBAR */}
      <ConversationsList onSelectUser={handleSelectUser} />

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {!selectedUser ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a conversation
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-4 border-b font-semibold bg-white">
              {selectedUser.name ||
                `${selectedUser.first_name} ${selectedUser.last_name}`}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((m) => (
                <div
                  key={m.message_id}
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    m.mine
                      ? "bg-blue-600 text-white ml-auto rounded-br-none"
                      : "bg-white border rounded-tl-none"
                  }`}
                >
                  <p>{m.content}</p>

                  {/* Timestamp */}
                  {m.sent_at && (
                    <p
                      className={`text-[10px] mt-1 ${
                        m.mine
                          ? "text-white/70 text-right"
                          : "text-gray-500"
                      }`}
                    >
                      {new Date(m.sent_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2 bg-white">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border px-3 py-2 rounded-full"
                placeholder="Type message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 rounded-full"
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