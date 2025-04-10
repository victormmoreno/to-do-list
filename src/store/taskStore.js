import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultTasks } from '../data/defaultTasks';

// Helper functions for task status
function isOverdue(limitDate, currentTime) {
    if (!limitDate) return false;
    return currentTime > new Date(limitDate);
}

function isNearlyDue(limitDate, currentTime) {
    if (!limitDate) return false;
    const limit = new Date(limitDate);
    const tenMinutes = 10 * 60 * 1000; // 10 minutes in milliseconds
    return currentTime > (limit - tenMinutes) && currentTime < limit;
}

// Limpiar almacenamiento antiguo si existe
if (localStorage.getItem('tasks') || localStorage.getItem('task-key-completed')) {
  localStorage.removeItem('tasks');
  localStorage.removeItem('task-key-completed');
}

const useTaskStore = create(persist(
  (set) => ({
    // Initial state
  taskList: defaultTasks,
  sortField: 'completed',
  sortDirection: 'desc',
  isModalOpen: false,
  currentTask: null,

  // Actions
  addTask: (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      completed: false,
      // created_at: new Date().toISOString()
    };
    return set((state) => ({
      taskList: [...state.taskList, newTask]
    }));
  },

  completeTask: (taskId) => set((state) => ({
    taskList: state.taskList.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    )
  })),

  deleteTask: (taskId) => set((state) => ({
    taskList: state.taskList.filter(task => task.id !== taskId)
  }) ),

  updateTask: (updatedTask) => set((state) => ({
    taskList: state.taskList.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    )
  })),

  setSort: (field, direction) => set({
    sortField: field,
    sortDirection: direction
  }),

  openModal: (task) => set({ isModalOpen: true, currentTask: task }),
  closeModal: () => set({ isModalOpen: false, currentTask: null }),
  
  // Expose status functions
  isOverdue,
  isNearlyDue
  }),
  {
    name: 'task-storage', // unique name for localStorage key
    getStorage: () => localStorage, // specify localStorage
    partialize: (state) => ({ 
      taskList: state.taskList, // only persist taskList
      sortField: state.sortField, // persist sortField
      sortDirection: state.sortDirection, // persist sortDirection
    })
  }
));

export default useTaskStore;
