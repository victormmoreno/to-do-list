// src/components/AddTaskButton.tsx
import React from 'react';
import { Task } from '../types/task';

interface AddTaskButtonProps {
  onAdd: (task: Omit<Task, 'id' | 'completed'>) => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onAdd }) => {
  const handleClick = () => {
    onAdd({
      title: 'Nueva tarea',
      description: '',
      limit_date: new Date().toISOString(),
      created_at: new Date().toISOString()
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
    >
      +
    </button>
  );
};