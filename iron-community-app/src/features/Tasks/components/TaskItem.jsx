import React from 'react';

const TaskItem = ({ task, onComplete, isCompleted }) => {
  const { id, title, description, points, dueDate } = task;

  // Basic date formatting
  const formattedDueDate = dueDate ? `Vence em: ${new Date(dueDate).toLocaleDateString('pt-BR')}` : '';

  return (
    <div className={`bg-white p-4 shadow rounded-lg mb-4 flex justify-between items-center ${isCompleted ? 'opacity-60' : ''}`}>
      <div className="flex-1 mr-4">
        <h3 className={`text-md font-semibold ${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>{title}</h3>
        {description && <p className={`text-sm mt-1 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>}
        <div className="text-xs mt-2 space-x-3">
          {points && <span className="text-green-600 font-medium">+{points} pontos</span>}
          {formattedDueDate && <span className="text-gray-500">{formattedDueDate}</span>}
        </div>
      </div>
      <button
        onClick={() => onComplete(id, points)}
        disabled={isCompleted}
        className={`px-3 py-1 rounded-md text-sm font-medium ${isCompleted ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500'}`}
      >
        {isCompleted ? 'Concluída' : 'Concluir'}
      </button>
    </div>
  );
};

export default TaskItem;

