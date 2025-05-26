import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Assuming React Router for navigation

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
        setError('Por favor, preencha o email e a senha.');
        setLoading(false);
        return;
    }

    try {
      // Simulate login API call
      // In a real app, you'd send email/password to the backend
      // The simulated login in AuthContext just needs some data
      // We'll pass email and a placeholder name for now
      await login({ email: formData.email, password: formData.password, name: 'Usuário Logado' }); // Pass password for potential future backend use, though context doesn't use it now
      navigate('/'); // Redirect to home or dashboard after successful login
    } catch (err) {
      console.error("Erro no login (simulado):", err);
      // Simulate common login errors
      if (err.message === 'Invalid credentials') { // Example check
          setError('Email ou senha inválidos.');
      } else {
          setError('Falha ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Senha</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      <p className="text-sm text-center text-gray-600">
        Não tem uma conta?{' '}
        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
          Registre-se
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;

