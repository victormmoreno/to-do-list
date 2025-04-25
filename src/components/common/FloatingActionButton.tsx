import React from 'react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 
        text-white rounded-full shadow-lg flex items-center justify-center text-3xl
        transition-colors duration-200"
      aria-label="Agregar nueva tarea"
    >
      +
    </button>
  );
};