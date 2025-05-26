import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import { useAuth } from '../../../contexts/AuthContext';
// import { getChats, getMessages, sendMessage } from '../services/messagingService'; // Simulated

// Simulated initial data
const initialChats = [
  {
    id: 'chat1',
    otherUserId: 'userABC',
    otherUserName: 'Alice Silva',
    lastMessage: 'Ótimo, obrigado!',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    unreadCount: 0,
  },
  {
    id: 'chat2',
    otherUserId: 'userXYZ',
    otherUserName: 'Bob Santos',
    lastMessage: 'Podemos marcar a reunião para amanhã?',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    unreadCount: 2,
  },
  {
    id: 'chat3',
    otherUserId: 'userDEF',
    otherUserName: 'Carlos Souza',
    lastMessage: 'Ok!',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    unreadCount: 0,
  },
];

const initialMessages = {
  chat1: [
    { id: 'm1', chatId: 'chat1', senderId: 'userABC', text: 'Olá! Como vai?', timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString() },
    { id: 'm2', chatId: 'chat1', senderId: 'currentUser', text: 'Tudo bem, e você?', timestamp: new Date(Date.now() - 1000 * 60 * 32).toISOString() },
    { id: 'm3', chatId: 'chat1', senderId: 'userABC', text: 'Ótimo, obrigado!', timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
  ],
  chat2: [
    { id: 'm4', chatId: 'chat2', senderId: 'userXYZ', text: 'Podemos marcar a reunião para amanhã?', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString() },
    { id: 'm5', chatId: 'chat2', senderId: 'userXYZ', text: 'Fico no aguardo.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3 + 10000).toISOString() }, // Simulate slightly later
  ],
  chat3: [
      { id: 'm6', chatId: 'chat3', senderId: 'currentUser', text: 'Combinado.', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 - 5000).toISOString() },
      { id: 'm7', chatId: 'chat3', senderId: 'userDEF', text: 'Ok!', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  ]
};

const MessagesPage = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({}); // Store messages per chat ID
  const [activeChatId, setActiveChatId] = useState(null);
  const [loadingChats, setLoadingChats] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  // Simulate fetching chats on mount
  useEffect(() => {
    const fetchChats = async () => {
      setLoadingChats(true);
      setError('');
      try {
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate delay
        // const fetchedChats = await getChats(user.id);
        // Replace senderId 'currentUser' in messages with actual user.id
        const processedMessages = JSON.parse(JSON.stringify(initialMessages).replace(/"currentUser"/g, `"${user?.id}"`));
        setMessages(processedMessages);
        setChats(initialChats);
      } catch (err) {
        console.error("Erro ao buscar chats (simulado):", err);
        setError('Não foi possível carregar suas conversas.');
      } finally {
        setLoadingChats(false);
      }
    };
    if (user) {
        fetchChats();
    }
  }, [user]);

  const handleSelectChat = async (chatId) => {
    setActiveChatId(chatId);
    // Simulate fetching messages for the selected chat if not already loaded
    // In this simulation, messages are loaded initially, but in a real app:
    // if (!messages[chatId]) {
    //   setLoadingMessages(true);
    //   try {
    //     await new Promise(resolve => setTimeout(resolve, 200));
    //     // const fetchedMessages = await getMessages(chatId);
    //     // setMessages(prev => ({ ...prev, [chatId]: fetchedMessages }));
    //   } catch (err) {
    //     setError(`Erro ao carregar mensagens para ${chatId}`);
    //   } finally {
    //     setLoadingMessages(false);
    //   }
    // }
  };

  const handleSendMessage = async (newMessageData) => {
    if (!activeChatId) return;

    // Optimistic update
    setMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessageData],
    }));

    // Update last message in chat list (optional, might be handled by backend push)
    setChats(prevChats => prevChats.map(chat =>
        chat.id === activeChatId
            ? { ...chat, lastMessage: newMessageData.text, timestamp: newMessageData.timestamp }
            : chat
    ));

    try {
      // Simulate sending message via API
      // await sendMessage(newMessageData);
      console.log("Mensagem enviada (simulada):", newMessageData);
    } catch (err) {
      console.error("Erro ao enviar mensagem (simulado):", err);
      setError('Falha ao enviar mensagem.');
      // Revert optimistic update if needed
    }
  };

  const activeChat = chats.find(c => c.id === activeChatId);
  const activeMessages = messages[activeChatId] || [];

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-theme(space.16))]"> {/* Adjust height based on Header height */}
        <div className="w-1/4 xl:w-1/5 flex-shrink-0">
          {loadingChats ? (
            <p className="p-4 text-sm text-gray-500">Carregando conversas...</p>
          ) : error ? (
            <p className="p-4 text-sm text-red-500">{error}</p>
          ) : (
            <ChatList
              chats={chats}
              onSelectChat={handleSelectChat}
              activeChatId={activeChatId}
            />
          )}
        </div>
        <div className="flex-1 flex flex-col">
          {loadingMessages ? (
            <p className="p-4 text-sm text-gray-500">Carregando mensagens...</p>
          ) : (
            <ChatWindow
              chat={activeChat}
              messages={activeMessages}
              onSendMessage={handleSendMessage}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagesPage;

