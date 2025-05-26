import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import CreatePostForm from '../components/CreatePostForm';
import PostItem from '../components/PostItem';
// import { getPosts } from '../services/feedService'; // Simulated service

// Simulated initial posts data
const initialPosts = [
  {
    id: 'post1',
    userId: 'userABC',
    userName: 'Alice Silva',
    userAvatar: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    content: 'Bem-vindos à comunidade Iron! Animada para conectar com todos.',
    type: 'text',
    attachmentUrl: null,
    likes: 15,
    comments: [{ id: 'c1', userId: 'userXYZ', text: 'Bem-vinda, Alice!' }],
  },
  {
    id: 'post2',
    userId: 'userXYZ',
    userName: 'Bob Santos',
    userAvatar: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    content: 'Compartilhando uma foto do nosso último evento.',
    type: 'image',
    attachmentUrl: 'https://via.placeholder.com/600x400.png?text=Evento+Iron+Community', // Placeholder image
    likes: 32,
    comments: [],
  },
];

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate fetching posts on mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError('');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        // const fetchedPosts = await getPosts(); // Use service in real app
        setPosts(initialPosts);
      } catch (err) {
        console.error("Erro ao buscar posts (simulado):", err);
        setError('Não foi possível carregar o feed. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    // Add the new post to the top of the list (simulate real-time update)
    setPosts(prevPosts => [ { ...newPost, id: `post${Date.now()}` }, ...prevPosts]);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl font-semibold mb-6">Feed da Comunidade</h1>

        <CreatePostForm onPostCreated={handlePostCreated} />

        {loading && <p className="text-center text-gray-500">Carregando feed...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500">Ainda não há postagens no feed.</p>
            ) : (
              posts.map(post => (
                <PostItem key={post.id} post={post} />
              ))
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FeedPage;

