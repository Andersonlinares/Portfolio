import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ProfileEditForm = ({ onCancel, onSave }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      // Initialize form with user data, excluding sensitive/internal fields
      const { id, _adminData, ...editableData } = user;
      setFormData(editableData);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation (add more as needed)
    if (!formData.name || !formData.email) {
        setError('Nome completo e email são obrigatórios.');
        setLoading(false);
        return;
    }

    try {
      // Simulate saving data (in a real app, call API)
      console.log("Salvando perfil (simulado):", formData);
      // Here you would typically call a function from context or service to update the user
      // For simulation, we'll just call the onSave prop which might update context locally
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      onSave(formData); // Pass updated data back to the parent page
    } catch (err) {
      console.error("Erro ao salvar perfil (simulado):", err);
      setError('Falha ao salvar o perfil. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p>Carregando formulário...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      {/* Replicate fields from RegisterForm/ProfileInfoCard that are editable */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome Completo *</label>
          <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input type="email" name="email" value={formData.email || ''} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input type="tel" name="phone" value={formData.phone || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome da Empresa</label>
          <input type="text" name="companyName" value={formData.companyName || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cargo</label>
          <input type="text" name="role" value={formData.role || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Qtd. Colaboradores</label>
          <input type="number" name="employeeCount" value={formData.employeeCount || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Faturamento Atual</label>
          <input type="number" name="currentRevenue" value={formData.currentRevenue || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Faturamento Desejado</label>
          <input type="number" name="desiredRevenue" value={formData.desiredRevenue || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        {/* Add other editable fields as needed */}
      </div>

      {/* Add password change fields if required */}

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;

