import React from 'react';
import AdminSidebar from '../features/Admin/components/AdminSidebar'; // Assuming AdminSidebar component exists

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Optional: Admin-specific Header? Or reuse MainLayout's Header? */}
        {/* <Header /> */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

