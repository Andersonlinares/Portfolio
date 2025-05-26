import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import TaskItem from '../components/TaskItem';
import { useAuth } from '../../../contexts/AuthContext';
// import { getTasks, completeTask } from '../services/taskService'; // Simulated

// Simulated initial tasks data
const initialTasks = [
  {
    id: 'task1',
    title: 'Completar Perfil',
    description: 'Preencha todas as informações do seu perfil para ganhar pontos.',
    points: 50,
    dueDate: null,
  },
  {
    id: 'task2',
    title: 'Participar do Evento de Networking',
    description: 'Marque presença no próximo evento de networking mensal.',
    points: 100,
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 13).toISOString(), // ~2 weeks from now
  },
  {
    id: 'task3',
    title: 'Compartilhar Primeiro Treino',
    description: 'Compartilhe sua rotina de exercícios na seção de treinos.',
    points: 30,
    dueDate: null,
  },
  {
    id: 'task4',
    title: 'Fazer Primeira Postagem no Feed',
    description: 'Apresente-se à comunidade ou compartilhe algo relevante.',
    points: 20,
    dueDate: null,
  },
];

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTaskIds, setCompletedTaskIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth(); // Needed to associate tasks/completions

  // Simulate fetching tasks and user completions
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError('');
      try {
        await new Promise(resolve => setTimeout(resolve, 400));
        // const fetchedTasks = await getTasks();
        setTasks(initialTasks);

        // Simulate fetching user's completed tasks (e.g., from localStorage)
        const storedCompletions = localStorage.getItem(`ironUser_${user?.id}_taskCompletions`);
        if (storedCompletions) {
          setCompletedTaskIds(new Set(JSON.parse(storedCompletions)));
        }

      } catch (err) {
        console.error("Erro ao buscar tarefas (simulado):", err);
        setError('Não foi possível carregar as tarefas. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    if (user) {
        fetchTasks();
    }
  }, [user]);

  const handleCompleteTask = async (taskId, points) => {
    if (!user) {
        setError('Você precisa estar logado para completar tarefas.');
        return;
    }

    // Optimistic update
    const newCompletedIds = new Set(completedTaskIds);
    newCompletedIds.add(taskId);
    setCompletedTaskIds(newCompletedIds);
    localStorage.setItem(`ironUser_${user.id}_taskCompletions`, JSON.stringify(Array.from(newCompletedIds)));

    try {
      // Simulate API call to mark task as complete and award points
      console.log(`Completando tarefa ${taskId} para usuário ${user.id}, ganhando ${points} pontos (simulado)`);
      await new Promise(resolve => setTimeout(resolve, 300));
      // await completeTask(taskId, user.id);

      // Here you might trigger an update to the user's points in a UserContext or refetch ranking
      console.log(`Pontos ${points} adicionados (simulado)`);

    } catch (err) {
      console.error("Erro ao completar tarefa (simulado):", err);
      setError('Falha ao marcar tarefa como concluída.');
      // Revert optimistic update
      const revertedCompletedIds = new Set(completedTaskIds);
      revertedCompletedIds.delete(taskId);
      setCompletedTaskIds(revertedCompletedIds);
      localStorage.setItem(`ironUser_${user.id}_taskCompletions`, JSON.stringify(Array.from(revertedCompletedIds)));
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Tarefas da Comunidade</h1>

        {loading && <p className="text-center text-gray-500">Carregando tarefas...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="space-y-4">
            {tasks.length === 0 ? (
              <p className="text-center text-gray-500">Nenhuma tarefa disponível no momento.</p>
            ) : (
              tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  isCompleted={completedTaskIds.has(task.id)}
                />
              ))
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TasksPage;

