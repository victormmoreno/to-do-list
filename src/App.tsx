// src/App.tsx
import React, { useState, useEffect } from 'react';
import { TaskList } from './components/Task/TaskList';
import { TaskForm } from './components/Task/TaskForm';
import { FloatingActionButton } from './components/common/FloatingActionButton';
import { Modal } from './components/common/Modal';
import { useTaskActions } from './hooks/useTaskActions';
// import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

const App: React.FC = () => {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleAddTask } = useTaskActions();

  // Efecto para manejar el modo oscuro
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Manejadores de eventos
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (formData: any) => {
    try {
      await handleAddTask(formData);
      handleCloseModal();
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Lista de Tareas
            </h1>
            {/* <ThemeToggle 
              darkMode={darkMode} 
              onToggle={toggleDarkMode}
            /> */}
          </div>
        </header>

        <main className="text-gray-900 dark:text-white">
          <TaskList />
        </main>

        <FloatingActionButton onClick={handleOpenModal} />

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Nueva Tarea"
        >
          <TaskForm
            onSubmit={handleSubmit}
            onCancel={handleCloseModal}
          />
        </Modal>
      </div>
    </div>
  );
};

export default App;