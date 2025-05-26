import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ProfileInfoCard = ({ onEdit }) => {
  const { user } = useAuth();

  if (!user) {
    return <p>Carregando informações do perfil...</p>;
  }

  // Campos a serem exibidos (excluindo senha e dados internos)
  const displayFields = {
    "Nome Completo": user.name,
    "Email": user.email,
    "Telefone": user.phone,
    "Empresa": user.companyName,
    "Cargo": user.role,
    "Qtd. Colaboradores": user.employeeCount,
    "Faturamento Atual": user.currentRevenue ? `$${user.currentRevenue.toLocaleString()}` : 'N/A',
    "Faturamento Desejado": user.desiredRevenue ? `$${user.desiredRevenue.toLocaleString()}` : 'N/A',
    // Adicionar outros campos relevantes que são visíveis para o próprio usuário
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Meu Perfil</h2>
        <button
          onClick={onEdit}
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Editar Perfil
        </button>
      </div>
      <div className="space-y-3">
        {Object.entries(displayFields).map(([label, value]) => (
          <div key={label} className="flex justify-between border-b pb-2">
            <span className="text-sm font-medium text-gray-600">{label}:</span>
            <span className="text-sm text-gray-800 text-right">{value || 'Não informado'}</span>
          </div>
        ))}
      </div>
      {/* Adicionar foto de perfil aqui se necessário */}
    </div>
  );
};

export default ProfileInfoCard;

