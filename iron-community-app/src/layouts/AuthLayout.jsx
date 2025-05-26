import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Pode adicionar um logo ou título aqui */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

