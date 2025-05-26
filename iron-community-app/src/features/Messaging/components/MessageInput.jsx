import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    setLoading(true);
    try {
      // Simulate sending message
      console.log("Enviando mensagem (simulado):", messageText);
      await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
      onSendMessage(messageText);
      setMessageText(''); // Clear input after sending
    } catch (error) {
      console.error("Erro ao enviar mensagem (simulado):", error);
      // Handle error display if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-gray-50">
      <div className="flex items-center">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !messageText.trim()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? '...' : 'Enviar'}
        </button>
        {/* Optional: Add button for attachments (images, links) */}
      </div>
    </form>
  );
};

export default MessageInput;

