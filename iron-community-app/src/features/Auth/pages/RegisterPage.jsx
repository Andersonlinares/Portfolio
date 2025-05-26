import React from 'react';
import RegisterForm from '../components/RegisterForm';
import AuthLayout from '../../../layouts/AuthLayout'; // Assuming a layout for auth pages

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;

