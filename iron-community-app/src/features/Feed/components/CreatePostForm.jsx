import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
// Assume a feed service for creating posts (simulated)
// import { createPost } from '../services/feedService';

const CreatePostForm = ({ onPostCreated }) => {
  const [postContent, setPostContent] = useState('');
  const [postType, setPostType] = useState('text'); // 'text', 'image', 'video'
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // Automatically set type based on file? Or keep manual selection?
    // For simplicity, we'll keep manual selection for now.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postContent.trim() && !file) {
      setError('Por favor, escreva algo ou anexe um arquivo.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      // Simulate post creation
      const newPostData = {
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar || null, // Assuming user might have an avatar URL
        timestamp: new Date().toISOString(),
        content: postContent,
        type: file ? postType : 'text',
        attachmentUrl: file ? URL.createObjectURL(file) : null, // Simulate URL for display
        likes: 0,
        comments: [],
      };

      console.log("Criando post (simulado):", newPostData);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Call the actual service function if it existed
      // const createdPost = await createPost(newPostData);

      // For simulation, pass the data directly
      onPostCreated(newPostData);

      // Reset form
      setPostContent('');
      setFile(null);
      setPostType('text');
      // Clear file input visually (might need ref)
      e.target.reset();

    } catch (err) {
      console.error("Erro ao criar post (simulado):", err);
      setError('Falha ao criar postagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg mb-6">
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder={`No que você está pensando, ${user?.name}?`}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
        rows="3"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Basic file input for image/video simulation */}
          <label className="cursor-pointer text-indigo-600 hover:text-indigo-800">
            📷 Anexar
            <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="hidden" />
          </label>
          {file && <span className="text-sm text-gray-500">{file.name}</span>}
          {/* Optional: Select post type if file attached */}
          {file && (
            <select value={postType} onChange={(e) => setPostType(e.target.value)} className="text-sm border rounded p-1">
              <option value="image">Imagem</option>
              <option value="video">Vídeo</option>
            </select>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Publicando...' : 'Publicar'}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default CreatePostForm;

