import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const Route = createFileRoute("/test/messages/")({
  component: RouteComponent,
});

const API = import.meta.env.VITE_API_URL;

function RouteComponent() {
  const [users, setUsers] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Load users
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await axios.get(
          `${API}/ryan-test/myCurrentAllocations`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadUsers();
  }, []);

  // ✅ Load messages
  const loadMessages = async (userId: string) => {
    try {
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
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Select user
  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
    loadMessages(user.user_id);
  };

  // ✅ Send message (optimistic)
  const handleSend = async () => {
    if (!text.trim() || !selectedUser) return;

    const tempMsg = {
      message_id: "temp-" + Date.now(),
      content: text,
      mine: true,
      sent_at: new Date().toISOString(), // ✅ timestamp added
    };

    setMessages((prev) => [...prev, tempMsg]);
    setText("");
    scrollToBottom();

    try {
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
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Auto refresh
  useEffect(() => {
    if (!selectedUser) return;

    const interval = setInterval(() => {
      loadMessages(selectedUser.user_id);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedUser]);

  // ✅ Scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // ✅ Format time helper
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDEBAR */}
      <div className="w-80 border-r overflow-y-auto bg-white">
        <div className="p-4 font-semibold border-b">Messages</div>

        {users.map((u) => {
          const name =
            u.name ||
            `${u.first_name || ""} ${u.last_name || ""}`;

          const isActive = selectedUser?.user_id === u.user_id;

          return (
            <div
              key={u.user_id}
              onClick={() => handleSelectUser(u)}
              className={`p-4 border-b cursor-pointer transition ${
                isActive ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{name}</span>

                {u.unread_count > 0 && (
                  <span className="bg-green-600 text-white text-xs px-2 rounded-full">
                    {u.unread_count}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 truncate">
                {u.preview || "Tap to chat"}
              </p>
            </div>
          );
        })}
      </div>

      {/* RIGHT CHAT PANEL */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {!selectedUser ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a conversation
          </div>
        ) : (
          <>
            {/* HEADER */}
            <div className="p-4 border-b bg-white font-semibold shadow-sm">
              {selectedUser.name ||
                `${selectedUser.first_name || ""} ${selectedUser.last_name || ""}`}
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  No messages yet
                </p>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.message_id}
                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                      m.mine
                        ? "bg-blue-600 text-white ml-auto rounded-br-none"
                        : "bg-white border rounded-tl-none"
                    }`}
                  >
                    {/* MESSAGE TEXT */}
                    <p>{m.content}</p>

                    {/* ✅ TIMESTAMP */}
                    {m.sent_at && (
                      <p
                        className={`text-[10px] mt-1 ${
                          m.mine
                            ? "text-white/70 text-right"
                            : "text-gray-500"
                        }`}
                      >
                        {formatTime(m.sent_at)}
                      </p>
                    )}
                  </div>
                ))
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-3 border-t bg-white flex gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border px-3 py-2 rounded-full"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-5 rounded-full"
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