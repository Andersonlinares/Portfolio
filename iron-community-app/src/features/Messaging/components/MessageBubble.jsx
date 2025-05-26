import React from 'react';

const MessageBubble = ({ message, isOwnMessage }) => {
  const { text, timestamp, senderName } = message;

  // Basic timestamp formatting
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '';

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${isOwnMessage ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {/* Optionally show sender name for group chats or if not own message */}
        {/* {!isOwnMessage && senderName && <p className="text-xs font-semibold mb-1">{senderName}</p>} */}
        <p className="text-sm whitespace-pre-wrap">{text}</p>
        <p className={`text-xs mt-1 ${isOwnMessage ? 'text-indigo-200' : 'text-gray-500'} text-right`}>{formattedTime}</p>
      </div>
    </div>
  );
};

export default MessageBubble;

