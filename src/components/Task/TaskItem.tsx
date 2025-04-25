import React from "react";
import { Task } from "../../types/task";
import { TaskService } from "../../services/taskService";
import { useTaskActions } from "@/hooks/useTaskActions";

interface TaskItemProps {
    task: Task;
    onEdit?: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
    const { handleToggleComplete, handleDeleteTask } = useTaskActions();
    const isOverdue = TaskService.isOverdue(task.limit_date);
    const isNearlyDue = TaskService.isNearlyDue(task.limit_date);

    return (
        <>
            <div className={`
            p-4 rounded-lg shadow-md bg-white dark:bg-gray-700
            ${isOverdue ? 'border-l-4 border-red-500' : ''}
            ${isNearlyDue && !isOverdue ? 'border-l-4 border-yellow-500' : ''}
            ${task.completed ? 'opacity-75' : ''}
            `}>
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                    </h3>
                    {task.description && (
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {task.description}
                        </p>
                    )}
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Fecha límite: {new Date(task.limit_date).toLocaleString()}
                    </div>
                    </div>
                    
                    <div className="flex gap-2">
                    <button
                        onClick={() => handleToggleComplete(task.id)}
                        className={`p-2 rounded-full ${
                        task.completed 
                            ? 'bg-gray-200 text-gray-600' 
                            : 'bg-green-100 text-green-600'
                        }`}
                    >
                        {task.completed ? '↩️' : '✓'}
                    </button>
                    
                    {onEdit && (
                        <button
                        onClick={() => onEdit(task)}
                        className="p-2 rounded-full bg-blue-100 text-blue-600"
                        >
                        ✏️
                        </button>
                    )}
                    
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 rounded-full bg-red-100 text-red-600"
                    >
                        🗑️
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}