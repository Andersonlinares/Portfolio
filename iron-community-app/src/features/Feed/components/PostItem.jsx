import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Placeholder components for interactions
const LikeButton = ({ initialLikes }) => {
  const [likes, setLikes] = React.useState(initialLikes);
  const [liked, setLiked] = React.useState(false);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
    // In real app, call API to update like status
  };

  return (
    <button onClick={handleLike} className={`text-sm ${liked ? 'text-indigo-600' : 'text-gray-500'} hover:text-indigo-500`}>
      {liked ? '❤️ Curtido' : '🤍 Curtir'} ({likes})
    </button>
  );
};

const CommentSection = ({ initialComments }) => {
  // Basic placeholder - full implementation would involve fetching/posting comments
  return (
    <div className="mt-2 pt-2 border-t border-gray-200">
      <button className="text-sm text-gray-500 hover:text-indigo-500">💬 Comentar ({initialComments.length})</button>
      {/* Display comments here if needed */}
    </div>
  );
};

const PostItem = ({ post }) => {
  const { userName, userAvatar, timestamp, content, type, attachmentUrl, likes, comments } = post;

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

      {content && <p className="text-gray-700 mb-3 whitespace-pre-wrap">{content}</p>}

      {attachmentUrl && (
        <div className="mb-3">
          {type === 'image' && <img src={attachmentUrl} alt="Post attachment" className="max-w-full h-auto rounded-md mx-auto" />}
          {type === 'video' && (
            <video controls className="max-w-full h-auto rounded-md mx-auto">
              <source src={attachmentUrl} />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          )}
        </div>
      )}

      <div className="flex justify-start space-x-4 border-t pt-2">
        <LikeButton initialLikes={likes || 0} />
        <CommentSection initialComments={comments || []} />
        {/* Add other actions like Share if needed */}
      </div>
    </div>
  );
};

export default PostItem;

