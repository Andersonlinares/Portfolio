import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ProfileInfoCard from '../components/ProfileInfoCard';
import ProfileEditForm from '../components/ProfileEditForm';
import MainLayout from '../../../layouts/MainLayout'; // Assuming a main layout for authenticated users

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, login } = useAuth(); // Use login to update user data in context after save

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedData) => {
    // Simulate updating the user data in the context
    // In a real app, this would likely involve an API call and then updating the context
    const updatedUser = { ...user, ...updatedData };
    login(updatedUser); // Re-use login to update the user state in AuthContext and localStorage
    setIsEditing(false);
    console.log("Perfil atualizado (simulado):", updatedUser);
    // Optionally show a success message
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {isEditing ? (
          <ProfileEditForm onCancel={handleCancel} onSave={handleSave} />
        ) : (
          <ProfileInfoCard onEdit={handleEdit} />
        )}
      </div>
    </MainLayout>
  );
};

export default ProfilePage;

