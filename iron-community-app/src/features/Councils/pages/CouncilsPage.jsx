import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import CouncilItem from '../components/CouncilItem';
// import { getCouncils } from '../services/councilService'; // Simulated service

// Simulated initial councils data
const initialCouncils = [
  {
    id: 'council1',
    name: 'Conselho de Marketing Digital',
    description: 'Discussões sobre estratégias e tendências em marketing online.',
    memberCount: 15,
    leaderName: 'Alice Silva',
  },
  {
    id: 'council2',
    name: 'Conselho de Gestão Financeira',
    description: 'Troca de experiências sobre finanças empresariais e investimentos.',
    memberCount: 12,
    leaderName: 'Bob Santos',
  },
  {
    id: 'council3',
    name: 'Conselho de Inovação e Tecnologia',
    description: 'Explorando novas tecnologias e modelos de negócio inovadores.',
    memberCount: 20,
    leaderName: 'Carlos Souza',
  },
];

const CouncilsPage = () => {
  const [councils, setCouncils] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate fetching councils on mount
  useEffect(() => {
    const fetchCouncils = async () => {
      setLoading(true);
      setError('');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 400));
        // const fetchedCouncils = await getCouncils(); // Use service in real app
        setCouncils(initialCouncils);
      } catch (err) {
        console.error("Erro ao buscar conselhos (simulado):", err);
        setError('Não foi possível carregar os conselhos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchCouncils();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Conselhos da Comunidade</h1>

        {loading && <p className="text-center text-gray-500">Carregando conselhos...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councils.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">Nenhum conselho disponível no momento.</p>
            ) : (
              councils.map(council => (
                <CouncilItem key={council.id} council={council} />
              ))
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CouncilsPage;

