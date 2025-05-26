import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Placeholder for navigation links - adapt based on final routes
const navLinks = [
  { path: '/', label: 'Feed', icon: '📄' }, // Example icon
  { path: '/events', label: 'Eventos', icon: '📅' },
  { path: '/messages', label: 'Mensagens', icon: '💬' },
  { path: '/ranking', label: 'Ranking', icon: '🏆' },
  { path: '/councils', label: 'Conselhos', icon: '👥' },
  { path: '/gallery', label: 'Galeria', icon: '🖼️' },
  { path: '/workouts', label: 'Treinos', icon: '🏋️' },
  { path: '/tasks', label: 'Tarefas', icon: '✅' },
  { path: '/profile', label: 'Meu Perfil', icon: '👤' },
  // Add Admin links conditionally if needed
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-semibold border-b border-gray-700">
        Iron Community
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
      {/* Optional: Footer or user info at the bottom */}
    </aside>
  );
};

export default Sidebar;

