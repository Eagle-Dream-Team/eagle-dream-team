import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ConversationsList } from "./conversations-list";

export const Route = createFileRoute("/test/John2/messages/")({
  component: RouteComponent,
});

const API = import.meta.env.VITE_API_URL;

function RouteComponent() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ LOAD CONVERSATIONS (SIDEBAR)
  useEffect(() => {
    const loadConversations = async () => {
      try {
        const res = await axios.get(
          `${API}/ryan-test/myCurrentAllocations`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        setConversations(res.data);
      } catch (err) {
        console.error("Failed to load conversations", err);
      } finally {
        setLoading(false);
      }
    };

    loadConversations();
  }, []);

  // ✅ LOAD MESSAGES
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
      console.error("Failed to load messages", err);
    }
  };

  // ✅ SELECT CHAT
const handleSelectUser = (conversation: any) => {
  const userId =
    conversation?.peer?.user_id ||
    conversation?.user_id;

  if (!userId) {
    console.error("No user_id found in conversation", conversation);
    return;
  }

  setSelectedConversation(conversation);
  loadMessages(userId);
  console.log("Selected conversation:", conversation);
};


  // ✅ SEND MESSAGE
  const handleSend = async () => {
    if (!text.trim() || !selectedConversation) return;

    const receiverId = selectedConversation?.peer?.user_id;

if (!receiverId) return;

    const tempMsg = {
      message_id: "temp-" + Date.now(),
      content: text,
      mine: true,
      sent_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempMsg]);
    setText("");
    scrollToBottom();

    try {
      await axios.post(
        `${API}/message/send`,
        {
          receiver_id: receiverId,
          content: text,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      loadMessages(receiverId);

      // ✅ Refresh sidebar (updates last message + unread)
      refreshConversations();

    } catch (err) {
      console.error("Send failed", err);
    }
  };

  // ✅ REFRESH SIDEBAR
  const refreshConversations = async () => {
    try {
      const res = await axios.get(
        `${API}/student/my-tutor`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setConversations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ AUTO REFRESH (messages + sidebar)
  useEffect(() => {
    if (!selectedConversation) return;

    const interval = setInterval(() => {
      loadMessages(selectedConversation.peer.user_id);
      refreshConversations();
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedConversation]);

  // ✅ SCROLL
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="flex h-screen">

      {/* ✅ SIDEBAR */}
      <div className="w-80">
        <ConversationsList
          conversations={conversations}
          onSelectUser={handleSelectUser}
          isLoading={loading}
        />
      </div>

      {/* ✅ CHAT PANEL */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {!selectedConversation ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a conversation
          </div>
        ) : (
          <>
            {/* HEADER */}
           <div className="p-4 border-b bg-white font-semibold">
              {selectedConversation?.peer
               ? `${selectedConversation.peer.first_name ?? ""} ${selectedConversation.peer.last_name ?? ""}`
              : "Loading..."}
</div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
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

            {/* INPUT */}
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