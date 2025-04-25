import React from 'react';
import { Task, TaskFormData } from '../../types/task';
import { useTaskForm } from '../../hooks/useTaskForm';

interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (formData: TaskFormData) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({
  initialTask,
  onSubmit,
  onCancel
}) => {
  const {
    formData,
    errors,
    handleChange,
    isValid,
    resetForm
  } = useTaskForm(initialTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      onSubmit(formData);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Título
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Ingresa el título de la tarea"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Descripción
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          rows={3}
          placeholder="Ingresa una descripción (opcional)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Fecha límite
        </label>
        <input
          type="datetime-local"
          value={formData.limit_date}
          onChange={(e) => handleChange('limit_date', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.limit_date && (
          <p className="mt-1 text-sm text-red-500">{errors.limit_date}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100
            hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-md"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={!isValid()}
          className={`px-4 py-2 text-sm font-medium text-white rounded-md
            ${isValid()
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-blue-300 cursor-not-allowed'
            }`}
        >
          Crear Tarea
        </button>
      </div>
    </form>
  );
};