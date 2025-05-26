import React from 'react';
import ChatItem from './ChatItem';

const ChatList = ({ chats, onSelectChat, activeChatId }) => {
  if (!chats || chats.length === 0) {
    return <p className="p-4 text-sm text-gray-500">Nenhuma conversa encontrada.</p>;
  }

  return (
    <div className="overflow-y-auto h-full border-r border-gray-200 bg-white">
      {/* Optional: Search bar for chats */}
      {/* <div className="p-3 border-b border-gray-200">
        <input type="text" placeholder="Buscar conversas..." className="w-full px-2 py-1 border rounded-md text-sm" />
      </div> */}
      <div>
        {chats.map(chat => (
          <ChatItem
            key={chat.id}
            chat={chat}
            onClick={onSelectChat}
            isActive={chat.id === activeChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

