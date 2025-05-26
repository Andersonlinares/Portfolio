import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import RankingTable from '../components/RankingTable';
import { useAuth } from '../../../contexts/AuthContext'; // To potentially personalize or fetch user-specific rank
// import { getUsersRanking } from '../services/rankingService'; // Simulated service

// Simulated user data with points
const initialUsers = [
  { id: 'userXYZ', name: 'Bob Santos', points: 1250, level: 13 },
  { id: 'userABC', name: 'Alice Silva', points: 980, level: 10 },
  { id: 'userDEF', name: 'Carlos Souza', points: 750, level: 8 },
  { id: 'userGHI', name: 'Diana Costa', points: 520, level: 6 },
  { id: 'userJKL', name: 'Eduardo Lima', points: 310, level: 4 },
  { id: 'currentUser', name: 'Você', points: 880, level: 9 }, // Example for logged-in user
];

const RankingPage = () => {
  const [rankedUsers, setRankedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchRanking = async () => {
      setLoading(true);
      setError('');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 400));
        // const fetchedRanking = await getUsersRanking();

        // Replace 'currentUser' with actual logged-in user data if available
        const processedUsers = initialUsers.map(u =>
          u.id === 'currentUser' && user ? { ...u, id: user.id, name: user.name } : u
        );
        // Filter out the placeholder if user is not logged in
        const finalUsers = user ? processedUsers : processedUsers.filter(u => u.id !== 'currentUser');

        setRankedUsers(finalUsers);
      } catch (err) {
        console.error("Erro ao buscar ranking (simulado):", err);
        setError('Não foi possível carregar o ranking. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchRanking();
  }, [user]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Ranking da Comunidade</h1>

        {loading && <p className="text-center text-gray-500">Carregando ranking...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <RankingTable users={rankedUsers} />
        )}

        {/* Optional: Display user's own rank separately */}
        {/* {user && !loading && !error && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg shadow">
            <h3 className="font-semibold">Sua Posição</h3>
            <p>Você está em Xº lugar com Y pontos (Nível Z).</p>
          </div>
        )} */}
      </div>
    </MainLayout>
  );
};

export default RankingPage;

