import { useCallback } from "react";
import { TaskService } from "../services/taskService";
import useTaskStore from "../store/taskStore";
import { Task } from "../types/task";

export const useTaskActions = () =>  {
    const { addTask, deleteTask, updateTask, completeTask } = useTaskStore();

    const handleAddTask = useCallback(async (taskData: Omit<Task, 'id' | 'completed'>) => {
        const validation = TaskService.validateTask(taskData);
        if (!validation.isValid) {
            throw new Error('Tarea inválida' + Object.values(validation.errors).join(', '));
        }
        const newTask = {
            ...taskData,
            id: Date.now().toString(),
            completed: false,
            created_at: new Date().toISOString()
        }
        addTask(newTask);
        return newTask;
    }, [addTask]);

    // const handleUpdateTask = useCallback(async (task: Task) => {

    const handleUpdateTask = useCallback(async (task: Task) => {
        const validation = TaskService.validateTask(task);
        if (!validation.isValid) {
            throw new Error('Tarea inválida' + Object.values(validation.errors).join(', '));
        }
        updateTask(task)
        return task;
    }, [updateTask]);
    
    const handleDeleteTask = useCallback((taskId: string) => {
        deleteTask(taskId);
    }, [deleteTask]);

    const handleToggleComplete = useCallback((taskId: string) => {
        completeTask(taskId);
    }, [completeTask]);
    
    return {
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
        handleToggleComplete
    }

}