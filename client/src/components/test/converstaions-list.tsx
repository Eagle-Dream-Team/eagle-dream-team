import type { Conversation } from "@/models/message";
import { Input } from "antd";

const conversations = [
  {
    id: 1,
    initials: "CM",
    name: "Chanda Mutale",
    preview: "Please review the assignment",
    time: "9:42 am",
    unread: 3,
  },
  {
    id: 2,
    initials: "BK",
    name: "Bwalya Kapenda",
    preview: "Thanks for yesterday's session!",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    initials: "TL",
    name: "Thandiwe Lungu",
    preview: "Meeting rescheduled to Friday",
    time: "Mon",
    unread: 1,
  },
  {
    id: 4,
    initials: "MM",
    name: "Mwamba Mwansa",
    preview: "Can we move our session to 4pm?",
    time: "Sun",
    unread: 0,
  },
  {
    id: 5,
    initials: "NK",
    name: "Namakau Kabwe",
    preview: "I've uploaded my coursework files",
    time: "Mar 25",
    unread: 0,
  },
  {
    id: 6,
    initials: "LC",
    name: "Lombe Chisanga",
    preview: "Thank you for youwr feedback!",
    time: "Mar 23",
    unread: 0,
  },
  {
    id: 7,
    initials: "KM",
    name: "Kasonde Mulenga",
    preview: "Can you share the reading list?",
    time: "Mar 22",
    unread: 2,
  },
  {
    id: 8,
    initials: "PN",
    name: "Prisca Nkausu",
    preview: "I passed my exam, thank you!",
    time: "Mar 21",
    unread: 0,
  },
  {
    id: 9,
    initials: "CM",
    name: "Chileshe Mwape",
    preview: "Attached my draft essay for review",
    time: "Mar 20",
    unread: 0,
  },
  {
    id: 10,
    initials: "MS",
    name: "Mutale Sikazwe",
    preview: "What time suits you this week?",
    time: "Mar 19",
    unread: 1,
  },
  {
    id: 11,
    initials: "NC",
    name: "Nchimunya Chibwe",
    preview: "Got your notes, very helpful!",
    time: "Mar 18",
    unread: 0,
  },
  {
    id: 12,
    initials: "EM",
    name: "Eneless Mumba",
    preview: "Please check my submission",
    time: "Mar 17",
    unread: 4,
  },
  {
    id: 13,
    initials: "TM",
    name: "Tendai Mpondela",
    preview: "Can we do an extra session?",
    time: "Mar 16",
    unread: 0,
  },
  {
    id: 14,
    initials: "BM",
    name: "Buyantanshi Mwila",
    preview: "Sent the worksheet you requested",
    time: "Mar 15",
    unread: 0,
  },
  {
    id: 15,
    initials: "SK",
    name: "Sitali Kafwimbi",
    preview: "I have a question on chapter 4",
    time: "Mar 14",
    unread: 2,
  },
  {
    id: 16,
    initials: "MC",
    name: "Monde Chanda",
    preview: "Thanks for rescheduling!",
    time: "Mar 13",
    unread: 0,
  },
  {
    id: 17,
    initials: "KS",
    name: "Kafula Simusokwe",
    preview: "Here is my updated project plan",
    time: "Mar 12",
    unread: 0,
  },
  {
    id: 18,
    initials: "CM",
    name: "Chisomo Mbewe",
    preview: "Can you review my references?",
    time: "Mar 11",
    unread: 1,
  },
  {
    id: 19,
    initials: "MP",
    name: "Mulenga Phiri",
    preview: "I completed the practice problems",
    time: "Mar 10",
    unread: 0,
  },
  {
    id: 20,
    initials: "NK",
    name: "Naomi Kamwendo",
    preview: "Looking forward to our next session",
    time: "Mar 9",
    unread: 0,
  },
];

export function ConversationsList({
  onSelectUser,
  conversations,
}: {
  onSelectUser: (c: Conversation) => void;
  conversations: Conversation[];
}) {
  return (
    <div className="w-70 h-full flex flex-col border-r   border-t  bg-white">
      {/* Header */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <h2 className="text-sm font-semibold mb-2 text-gray-800">Messages</h2>
        <Input placeholder="Search..." className="h-8 text-xs rounded-md" />
      </div>

      {/* Contacts */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((c) => (
          <div
            key={c.allocation_id}
            onClick={() => onSelectUser(c)}
            className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b transition-all"
          >
            {/* Avatar/Intial Holder */}
            <div className="w-11 h-11 rounded-full bg-gray-200 border flex items-center justify-center font-bold text-sm text-gray-700 shrink-0">
              {c.peer.first_name[0]}
              {c.peer.last_name[0]}
            </div>

            {/* Conversation Info */}
            <div className="flex-1 min-w-0">
              {/* Name + Time */}
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-sm text-gray-900 truncate">
                  {c.peer.first_name} {c.peer.last_name}
                </p>

                <p className="text-[11px] text-gray-500 whitespace-nowrap">
                  {c.last_message
                    ? new Date(c.last_message.sent_at).toLocaleDateString()
                    : ""}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 mt-1">
                <p className="text-xs text-gray-600 truncate">
                  {c.last_message?.mine && (
                    <span className="text-gray-400">You: </span>
                  )}
                  {c.last_message?.content ?? "No messages yet"}
                </p>

                {c.unread_count > 0 && (
                  <span className="bg-neutral-800 text-neutral-50 text-[10px] font-bold px-2 py-0.5 rounded-full min-w-5 text-center shrink-0">
                    {c.unread_count}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
