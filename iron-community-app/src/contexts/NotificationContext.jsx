import React, { useState, useEffect, createContext, useContext } from 'react';

const NotificationContext = createContext();

// Simulated notifications
const initialNotifications = [
  { id: 'n1', text: 'Bob Santos curtiu sua postagem.', timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), read: false, link: '/feed' }, // Link to relevant page
  { id: 'n2', text: 'Novo evento "Workshop de Vendas" adicionado.', timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), read: false, link: '/events' },
  { id: 'n3', text: 'Você tem uma nova mensagem de Alice Silva.', timestamp: new Date(Date.now() - 1000 * 60 * 150).toISOString(), read: true, link: '/messages' }, // Example of read notification
];

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulate fetching notifications
    setNotifications(initialNotifications);
    setUnreadCount(initialNotifications.filter(n => !n.read).length);
  }, []);

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(n => (n.id === notificationId ? { ...n, read: true } : n))
    );
    setUnreadCount(prev => (prev > 0 ? prev - 1 : 0));
    // In real app, call API to mark as read
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
    // In real app, call API
  };

  // Function to add a new notification (e.g., for real-time updates simulation)
  const addNotification = (notification) => {
    const newNotification = { ...notification, id: `n${Date.now()}`, timestamp: new Date().toISOString(), read: false };
    setNotifications(prev => [newNotification, ...prev]);
    setUnreadCount(prev => prev + 1);
  };

  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

