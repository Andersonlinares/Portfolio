import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Placeholder for admin navigation links
const adminNavLinks = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/admin/users', label: 'Gerenciar Usuários', icon: '🧑‍💼' },
  { path: '/admin/events', label: 'Gerenciar Eventos', icon: '🗓️' },
  { path: '/admin/councils', label: 'Gerenciar Conselhos', icon: '👥' },
  { path: '/admin/tasks', label: 'Gerenciar Tarefas', icon: '📝' },
  { path: '/admin/gallery', label: 'Gerenciar Galeria', icon: '🖼️' },
  { path: '/admin/settings', label: 'Configurações', icon: '⚙️' }, // e.g., Visibility
  { path: '/', label: 'Voltar ao App', icon: '↩️' }, // Link back to the main app
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col flex-shrink-0">
      <div className="p-4 text-xl font-semibold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {adminNavLinks.map((link) => {
          // Check if the current path starts with the link path for active state
          const isActive = location.pathname === link.path || (link.path !== '/admin/dashboard' && location.pathname.startsWith(link.path));
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

