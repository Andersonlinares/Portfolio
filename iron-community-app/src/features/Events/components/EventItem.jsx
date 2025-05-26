import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const EventItem = ({ event, onRegister, isRegistered }) => {
  const { id, title, description, date, location, registeredUsers } = event;

  // Format date for display
  const formattedDate = format(new Date(date), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="mb-4 sm:mb-0 sm:mr-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">📅 {formattedDate}</p>
        <p className="text-sm text-gray-500 mb-2">📍 {location}</p>
        <p className="text-sm text-gray-700">{description}</p>
        {/* Optional: Show number of registered users */}
        {/* <p className="text-xs text-gray-400 mt-1">{registeredUsers || 0} inscritos</p> */}
      </div>
      <button
        onClick={() => onRegister(id)}
        disabled={isRegistered}
        className={`px-4 py-2 rounded-md text-sm font-medium ${isRegistered ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
      >
        {isRegistered ? 'Inscrito' : 'Inscrever-se'}
      </button>
      {/* Add link/button to view event details if needed */}
    </div>
  );
};

export default EventItem;

