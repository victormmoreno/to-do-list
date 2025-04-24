import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskFilters } from '../types/task';
import { STORAGE_KEYS } from '../config/constants';
import { defaultTasks } from '../data/defaultTasks';

interface TaskStore {
  taskList: Task[];
  sortField: TaskFilters['sortField'];
  sortDirection: TaskFilters['sortDirection'];
  
  // Actions
  addTask: (task: Omit<Task, 'id' | 'completed'>) => void;
  completeTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (task: Task) => void;
  setSort: (field: TaskFilters['sortField'], direction: TaskFilters['sortDirection']) => void;
}

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      taskList: defaultTasks,
      sortField: 'completed',
      sortDirection: 'desc',

      addTask: (task) => {
        const newTask: Task = {
          ...task,
          id: Date.now().toString(),
          completed: false,
          created_at: new Date().toISOString()
        };
        set((state) => ({
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
      })),

      updateTask: (updatedTask) => set((state) => ({
        taskList: state.taskList.map(task => 
          task.id === updatedTask.id ? updatedTask : task
        )
      })),

      setSort: (field, direction) => set({
        sortField: field,
        sortDirection: direction
      })
    }),
    {
      name: STORAGE_KEYS.TASKS,
      getStorage: () => localStorage,
      partialize: (state) => ({ 
        taskList: state.taskList,
        sortField: state.sortField,
        sortDirection: state.sortDirection,
      })
    }
  )
);

export default useTaskStore;