import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

// Placeholder data for metrics
const metrics = [
  { label: 'Usuários Ativos', value: 150, change: '+5%' },
  { label: 'Novos Cadastros (Mês)', value: 25, change: '+10%' },
  { label: 'Eventos Agendados', value: 8, change: '+1' },
  { label: 'Postagens no Feed (Hoje)', value: 42, change: '-3%' },
];

const AdminDashboardPage = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Administrativo</h1>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.label}</h3>
            <p className="text-3xl font-semibold text-gray-900">{metric.value}</p>
            {/* Optional: Show change indicator */}
            {/* <p className={`text-sm ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{metric.change}</p> */}
          </div>
        ))}
      </div>

      {/* Placeholder for other sections like recent activity, quick actions, etc. */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Atividade Recente (Placeholder)</h2>
        <p className="text-gray-600">Aqui seria exibida a atividade recente dos usuários, eventos, etc.</p>
      </div>

    </AdminLayout>
  );
};

export default AdminDashboardPage;

