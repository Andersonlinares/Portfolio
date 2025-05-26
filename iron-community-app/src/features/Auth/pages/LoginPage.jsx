import React from 'react';
import LoginForm from '../components/LoginForm';
import AuthLayout from '../../../layouts/AuthLayout'; // Assuming a layout for auth pages

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

