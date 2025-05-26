import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import PhotoItem from '../components/PhotoItem';
import { useAuth } from '../../../contexts/AuthContext'; // To check admin status for upload
// import { getPhotos, uploadPhoto } from '../services/galleryService'; // Simulated

// Simulated initial photos data
const initialPhotos = [
  { id: 'p1', url: 'https://via.placeholder.com/400x400.png?text=Evento+1', description: 'Foto do Workshop de Liderança', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() },
  { id: 'p2', url: 'https://via.placeholder.com/400x400.png?text=Evento+2', description: 'Networking Mensal', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString() },
  { id: 'p3', url: 'https://via.placeholder.com/400x400.png?text=Confraternizacao', description: 'Confraternização da comunidade', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString() },
  { id: 'p4', url: 'https://via.placeholder.com/400x400.png?text=Palestra', description: 'Palestra sobre Inovação', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString() },
  { id: 'p5', url: 'https://via.placeholder.com/400x400.png?text=Team+Building', description: 'Atividade de Team Building', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString() },
  { id: 'p6', url: 'https://via.placeholder.com/400x400.png?text=Cafe+com+Lideres', description: 'Café com Líderes', uploadedBy: 'Admin', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString() },
];

// Basic Admin Check Simulation (replace with actual role check)
const isAdminUser = (user) => {
  return user?.email?.includes('admin'); // Simple check for demo
};

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const { user } = useAuth();
  const isAdmin = isAdminUser(user);

  // Simulate fetching photos
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError('');
      try {
        await new Promise(resolve => setTimeout(resolve, 400));
        // const fetchedPhotos = await getPhotos();
        setPhotos(initialPhotos);
      } catch (err) {
        console.error("Erro ao buscar fotos (simulado):", err);
        setError('Não foi possível carregar a galeria. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    const file = event.target.elements.photoFile.files[0];
    const description = event.target.elements.description.value;

    if (!file) {
      setUploadError('Por favor, selecione um arquivo.');
      return;
    }

    setUploading(true);
    setUploadError('');

    try {
      // Simulate upload
      console.log(`Simulando upload da foto: ${file.name}, Descrição: ${description}`);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add the new photo to the state (optimistic update or refetch)
      const newPhoto = {
        id: `p${Date.now()}`,
        url: URL.createObjectURL(file), // Temporary URL for display
        description: description,
        uploadedBy: user?.name || 'Admin',
        timestamp: new Date().toISOString(),
      };
      setPhotos(prev => [newPhoto, ...prev]);
      setShowUploadModal(false);

    } catch (err) {
      console.error("Erro no upload (simulado):", err);
      setUploadError('Falha no upload. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Galeria de Fotos</h1>
          {isAdmin && (
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Adicionar Foto
            </button>
          )}
        </div>

        {loading && <p className="text-center text-gray-500">Carregando galeria...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">Nenhuma foto na galeria ainda.</p>
            ) : (
              photos.map(photo => (
                <PhotoItem key={photo.id} photo={photo} />
              ))
            )}
          </div>
        )}
      </div>

      {/* Upload Modal (Admin only) */}
      {isAdmin && showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Adicionar Nova Foto</h2>
            <form onSubmit={handleUpload}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Arquivo da Foto</label>
                <input type="file" name="photoFile" accept="image/*" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"/>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição (opcional)</label>
                <input type="text" name="description" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              {uploadError && <p className="text-red-500 text-sm mb-3">{uploadError}</p>}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  disabled={uploading}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {uploading ? 'Enviando...' : 'Enviar Foto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default GalleryPage;

