import React from 'react';

const ChatItem = ({ chat, onClick, isActive }) => {
  const { id, otherUserName, lastMessage, timestamp, unreadCount } = chat;

  // Basic formatting for timestamp (replace with date-fns if needed)
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '';

  return (
    <div
      onClick={() => onClick(id)}
      className={`flex items-center p-3 cursor-pointer border-b border-gray-200 ${isActive ? 'bg-indigo-100' : 'hover:bg-gray-100'}`}
    >
      {/* Placeholder Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-400 mr-3 flex-shrink-0 flex items-center justify-center text-white font-semibold">
        {otherUserName?.charAt(0).toUpperCase() || '?'}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold text-sm text-gray-800 truncate">{otherUserName || 'Usuário Desconhecido'}</p>
          <p className="text-xs text-gray-500 flex-shrink-0 ml-2">{formattedTime}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 truncate pr-2">{lastMessage || 'Nenhuma mensagem ainda'}</p>
          {unreadCount > 0 && (
            <span className="bg-indigo-600 text-white text-xs font-bold rounded-full px-2 py-0.5 flex-shrink-0">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

