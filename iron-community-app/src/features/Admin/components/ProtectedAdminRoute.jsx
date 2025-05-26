import React from 'react';

// Basic Admin Check Simulation (replace with actual role check from context/backend)
const isAdminUser = (user) => {
    return user?.email?.includes('admin'); // Simple check for demo
};

// Higher-Order Component for protecting admin routes
const ProtectedAdminRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Assuming useAuth provides user and loading state

    if (loading) {
        return <div>Carregando...</div>; // Or a spinner component
    }

    if (!user || !isAdminUser(user)) {
        // Redirect to login or an unauthorized page
        // Using navigate from react-router-dom is common here
        // For simplicity, just showing a message
        // Replace with: return <Navigate to="/login" replace />;
        return <div>Acesso não autorizado. Faça login como administrador.</div>;
    }

    return children;
};

// You would wrap your admin page components with this HOC in your router setup
// Example in router:
// <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>} />

// Need to import useAuth from context
// import { useAuth } from '../contexts/AuthContext';
// import { Navigate } from 'react-router-dom'; // If using Navigate for redirection

// Note: This file provides the concept. Actual implementation requires integrating
// useAuth and potentially react-router-dom's Navigate component.
// For now, it serves as a placeholder for the protection logic.

export default ProtectedAdminRoute;

