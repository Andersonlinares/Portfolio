import React from 'react';
import { Link } from 'react-router-dom'; // Assuming navigation to council details

const CouncilItem = ({ council }) => {
  const { id, name, description, memberCount, leaderName } = council;

  return (
    <Link to={`/councils/${id}`} className="block bg-white p-4 shadow rounded-lg mb-4 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{memberCount || 0} membros</span>
        {leaderName && <span>Líder: {leaderName}</span>}
      </div>
    </Link>
  );
};

export default CouncilItem;

