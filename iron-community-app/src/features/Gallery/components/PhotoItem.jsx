import React, { useState } from 'react';

const PhotoItem = ({ photo }) => {
  const { id, url, description, uploadedBy, timestamp } = photo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Basic date formatting
  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString('pt-BR') : '';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="relative group bg-gray-200 rounded-lg overflow-hidden cursor-pointer aspect-square flex items-center justify-center"
        onClick={openModal}
      >
        <img src={url} alt={description || 'Galeria Iron Community'} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
        {/* Overlay on hover - optional */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end p-2">
          <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
            {description || `Foto por ${uploadedBy || 'Admin'}`}
          </p>
        </div>
      </div>

      {/* Simple Modal for viewing image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div className="relative max-w-3xl max-h-[80vh] bg-white p-4 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside modal */}
            <img src={url} alt={description || 'Galeria Iron Community'} className="block max-w-full max-h-[calc(80vh-60px)] object-contain mx-auto" />
            <div className="mt-2 text-center">
              {description && <p className="text-sm text-gray-700 mb-1">{description}</p>}
              <p className="text-xs text-gray-500">Enviada por: {uploadedBy || 'Admin'} {formattedDate && `em ${formattedDate}`}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 bg-white rounded-full p-1 focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoItem;

