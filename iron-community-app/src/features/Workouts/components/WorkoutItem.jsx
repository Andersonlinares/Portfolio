import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const WorkoutItem = ({ workout }) => {
  const { id, userId, userName, userAvatar, timestamp, description, category, mediaUrl, mediaType } = workout;

  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: true, locale: ptBR });

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <div className="flex items-center mb-3">
        {/* Placeholder Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-xl">
          {userAvatar ? <img src={userAvatar} alt={userName} className="w-full h-full rounded-full object-cover"/> : userName?.charAt(0).toUpperCase() || '?'}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{userName || 'Usuário Anônimo'}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>

      {description && <p className="text-gray-700 mb-3 whitespace-pre-wrap">{description}</p>}
      {category && <p className="text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full inline-block mb-3">#{category}</p>}

      {mediaUrl && (
        <div className="mb-3">
          {mediaType === 'image' && <img src={mediaUrl} alt={`Workout by ${userName}`} className="max-w-full h-auto rounded-md mx-auto" />}
          {mediaType === 'video' && (
            <video controls className="max-w-full h-auto rounded-md mx-auto">
              <source src={mediaUrl} />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          )}
        </div>
      )}

      {/* Add like/comment sections if workouts are meant to be social posts */}
    </div>
  );
};

export default WorkoutItem;

