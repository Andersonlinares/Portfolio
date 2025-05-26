import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

const GenericManagementPage = ({ title, children }) => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        {children || <p className="text-gray-600">Funcionalidade de gerenciamento em desenvolvimento.</p>}
      </div>
      {/* Add tables, forms, buttons for management here */}
    </AdminLayout>
  );
};

export default GenericManagementPage;

