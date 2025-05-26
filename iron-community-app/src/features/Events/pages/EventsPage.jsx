import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import EventItem from '../components/EventItem';
import { useAuth } from '../../../contexts/AuthContext';
// import { getEvents, registerForEvent } from '../services/eventService'; // Simulated service

// Simulated initial events data
const initialEvents = [
  {
    id: 'event1',
    title: 'Workshop de Liderança',
    description: 'Aprenda técnicas avançadas de liderança com especialistas.',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(), // 1 week from now
    location: 'Online (Zoom)',
    registeredUsers: [], // Store user IDs who registered
  },
  {
    id: 'event2',
    title: 'Networking Mensal',
    description: 'Conecte-se com outros membros da comunidade.',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(), // 2 weeks from now
    location: 'Sede Iron Community',
    registeredUsers: [],
  },
  {
    id: 'event3',
    title: 'Palestra sobre Inovação',
    description: 'Descubra as últimas tendências em inovação para negócios.',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21).toISOString(), // 3 weeks from now
    location: 'Auditório Principal',
    registeredUsers: [],
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [registeredEventIds, setRegisteredEventIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  // Simulate fetching events and user registrations on mount
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError('');
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        // const fetchedEvents = await getEvents(); // Use service in real app
        setEvents(initialEvents);

        // Simulate fetching user's registered events (e.g., from localStorage or user profile)
        const storedRegistrations = localStorage.getItem(`ironUser_${user?.id}_eventRegistrations`);
        if (storedRegistrations) {
          setRegisteredEventIds(new Set(JSON.parse(storedRegistrations)));
        }

      } catch (err) {
        console.error("Erro ao buscar eventos (simulado):", err);
        setError('Não foi possível carregar os eventos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    if (user) {
        fetchEvents();
    }
  }, [user]);

  const handleRegister = async (eventId) => {
    if (!user) {
        setError('Você precisa estar logado para se inscrever em eventos.');
        return;
    }

    // Optimistic update
    const newRegisteredIds = new Set(registeredEventIds);
    newRegisteredIds.add(eventId);
    setRegisteredEventIds(newRegisteredIds);
    localStorage.setItem(`ironUser_${user.id}_eventRegistrations`, JSON.stringify(Array.from(newRegisteredIds)));

    try {
      // Simulate API call to register
      console.log(`Registrando usuário ${user.id} para o evento ${eventId} (simulado)`);
      await new Promise(resolve => setTimeout(resolve, 300));
      // await registerForEvent(eventId, user.id);
      // Show success message if needed
    } catch (err) {
      console.error("Erro ao registrar no evento (simulado):", err);
      setError('Falha ao registrar no evento. Tente novamente.');
      // Revert optimistic update on failure
      const revertedRegisteredIds = new Set(registeredEventIds);
      revertedRegisteredIds.delete(eventId);
      setRegisteredEventIds(revertedRegisteredIds);
      localStorage.setItem(`ironUser_${user.id}_eventRegistrations`, JSON.stringify(Array.from(revertedRegisteredIds)));
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Próximos Eventos</h1>

        {loading && <p className="text-center text-gray-500">Carregando eventos...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {events.length === 0 ? (
              <p className="text-center text-gray-500">Nenhum evento agendado no momento.</p>
            ) : (
              events.map(event => (
                <EventItem
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                  isRegistered={registeredEventIds.has(event.id)}
                />
              ))
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EventsPage;

