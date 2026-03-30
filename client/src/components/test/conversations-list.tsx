import React from "react";

interface User {
  id: number;
  name: string;
}

interface ConversationsListProps {
  onSelectUser: (user: User) => void;
}

const mockUsers: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

export function ConversationsList({ onSelectUser }: ConversationsListProps) {
  return (
    <div className="w-64 border-r bg-gray-50 p-4">
      <div className="font-bold mb-4">Conversations</div>
      <ul>
        {mockUsers.map((user) => (
          <li
            key={user.id}
            className="cursor-pointer p-2 rounded hover:bg-gray-200"
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
