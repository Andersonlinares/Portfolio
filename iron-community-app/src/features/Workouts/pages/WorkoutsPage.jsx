import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import WorkoutItem from '../components/WorkoutItem';
import { useAuth } from '../../../contexts/AuthContext';
// import { getWorkouts, shareWorkout } from '../services/workoutService'; // Simulated

// Simulated initial workouts data
const initialWorkouts = [
  {
    id: 'w1',
    userId: 'userABC',
    userName: 'Alice Silva',
    userAvatar: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // 1 hour ago
    description: 'Treino de pernas hoje! 💪',
    category: 'Musculação',
    mediaUrl: 'https://via.placeholder.com/400x300.png?text=Treino+Pernas',
    mediaType: 'image',
  },
  {
    id: 'w2',
    userId: 'userXYZ',
    userName: 'Bob Santos',
    userAvatar: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    description: 'Corrida matinal de 5km concluída! 🏃‍♂️',
    category: 'Corrida',
    mediaUrl: null,
    mediaType: null,
  },
  {
    id: 'w3',
    userId: 'userDEF',
    userName: 'Carlos Souza',
    userAvatar: null,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(), // 25 hours ago
    description: 'Sessão de Yoga para relaxar.',
    category: 'Yoga',
    mediaUrl: 'https://via.placeholder.com/400x300.png?text=Yoga+Pose',
    mediaType: 'image',
  },
];

// Simple form component for sharing workouts
const ShareWorkoutForm = ({ onWorkoutShared }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [mediaType, setMediaType] = useState('image');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim() && !file) {
      setError('Descreva seu treino ou anexe uma mídia.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      // Simulate sharing workout
      const newWorkoutData = {
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar || null,
        timestamp: new Date().toISOString(),
        description: description,
        category: category,
        mediaUrl: file ? URL.createObjectURL(file) : null,
        mediaType: file ? (file.type.startsWith('video/') ? 'video' : 'image') : null,
      };

      console.log("Compartilhando treino (simulado):", newWorkoutData);
      await new Promise(resolve => setTimeout(resolve, 500));

      // const createdWorkout = await shareWorkout(newWorkoutData);
      onWorkoutShared(newWorkoutData);

      // Reset form
      setDescription('');
      setCategory('');
      setFile(null);
      e.target.reset();

    } catch (err) {
      console.error("Erro ao compartilhar treino (simulado):", err);
      setError('Falha ao compartilhar treino. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-3">Compartilhar Treino</h3>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descreva seu treino..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
        rows="2"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoria (opcional)</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ex: Musculação, Corrida, Yoga"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Anexar Mídia (opcional)</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="text-right">
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Compartilhando...' : 'Compartilhar'}
        </button>
      </div>
    </form>
  );
};

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate fetching workouts
  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true);
      setError('');
      try {
        await new Promise(resolve => setTimeout(resolve, 400));
        // const fetchedWorkouts = await getWorkouts();
        setWorkouts(initialWorkouts);
      } catch (err) {
        console.error("Erro ao buscar treinos (simulado):", err);
        setError('Não foi possível carregar os treinos. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  const handleWorkoutShared = (newWorkout) => {
    setWorkouts(prev => [{ ...newWorkout, id: `w${Date.now()}` }, ...prev]);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl font-semibold mb-6">Treinos da Comunidade</h1>

        <ShareWorkoutForm onWorkoutShared={handleWorkoutShared} />

        {loading && <p className="text-center text-gray-500">Carregando treinos...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {workouts.length === 0 ? (
              <p className="text-center text-gray-500">Nenhum treino compartilhado ainda.</p>
            ) : (
              workouts.map(workout => (
                <WorkoutItem key={workout.id} workout={workout} />
              ))
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default WorkoutsPage;

