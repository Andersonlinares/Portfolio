import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Iron Community</h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Olá, {user.name}!</span>
          <Link to="/profile" className="text-sm text-gray-600 hover:text-indigo-600">Meu Perfil</Link>
          <button
            onClick={logout}
            className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            Sair
          </button>
          {/* Notification Bell Placeholder */}
          <div className="relative">
            {/* Placeholder for notification icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* Placeholder for notification count badge */}
            {/* <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span> */}
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login" className="text-sm text-indigo-600 hover:text-indigo-800 mr-4">Login</Link>
          <Link to="/register" className="text-sm text-indigo-600 hover:text-indigo-800">Registrar</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

