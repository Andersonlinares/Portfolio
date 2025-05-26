import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useAuth } from '../../../contexts/AuthContext';

const ChatWindow = ({ chat, messages, onSendMessage }) => {
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change or chat opens
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-50">
        Selecione uma conversa para começar.
      </div>
    );
  }

  const handleSendMessage = (text) => {
    const newMessage = {
      id: `msg${Date.now()}`,
      chatId: chat.id,
      senderId: user.id,
      senderName: user.name,
      text: text,
      timestamp: new Date().toISOString(),
    };
    onSendMessage(newMessage);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <h2 className="font-semibold text-gray-800">{chat.otherUserName || 'Conversa'}</h2>
        {/* Optional: Add status or other info */}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">Nenhuma mensagem nesta conversa ainda.</p>
        ) : (
          messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} isOwnMessage={msg.senderId === user?.id} />
          ))
        )}
        <div ref={messagesEndRef} /> {/* Anchor for scrolling */} 
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;

