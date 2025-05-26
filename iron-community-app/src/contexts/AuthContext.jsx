import React, { createContext, useState, useContext, useEffect } from 'react';

// Criar o contexto
const AuthContext = createContext(null);

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Para verificar o estado inicial de autenticação

  // Simular a verificação de autenticação ao carregar (ex: checar localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('ironUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erro ao parsear usuário do localStorage:", error);
        localStorage.removeItem('ironUser');
      }
    }
    setLoading(false);
  }, []);

  // Função de login simulada
  const login = (userData) => {
    // Em um app real, aqui ocorreria a chamada API
    // Simulando sucesso e salvando no estado e localStorage
    const fakeUser = { ...userData, id: 'user123', name: userData.name || 'Usuário Teste' }; // Adiciona ID e nome se não vierem
    setUser(fakeUser);
    localStorage.setItem('ironUser', JSON.stringify(fakeUser));
    return Promise.resolve(fakeUser);
  };

  // Função de logout simulada
  const logout = () => {
    setUser(null);
    localStorage.removeItem('ironUser');
    return Promise.resolve();
  };

  // Função de registro simulada
  const register = (registrationData) => {
    // Em um app real, aqui ocorreria a chamada API para registrar
    // Simulando sucesso e fazendo login automaticamente após registro
    console.log("Registrando usuário (simulado):", registrationData);
    // Poderia retornar dados do novo usuário ou apenas sucesso
    // Para simplificar, vamos apenas logar o usuário após registro
    const newUser = {
        id: `user${Date.now()}`,
        email: registrationData.email,
        name: registrationData.fullName,
        // Adicionar outros campos relevantes do formulário de registro
        companyName: registrationData.companyName,
        role: registrationData.role,
        employeeCount: registrationData.employeeCount,
        currentRevenue: registrationData.currentRevenue,
        desiredRevenue: registrationData.desiredRevenue,
        phone: registrationData.phone,
        // Dados que o admin veria (simulado)
        _adminData: {
            courtesies: 3, // Exemplo
        }
    };
    return login(newUser); // Loga o usuário recém-registrado
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook customizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

