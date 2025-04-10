import { useState, useEffect } from "react";

export function useCompleteTask({ task, onComplete }) {
    const [isCompleted, setIsCompleted] = useState(() => {
        try {
            const saved = localStorage.getItem(`task-${task.key}-completed`);
            return saved !== null ? JSON.parse(saved) : task.completed;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return task.completed;
        }
    });

    useEffect(() => {
        localStorage.setItem(`task-${task.key}-completed`, JSON.stringify(isCompleted));
    }, [isCompleted, task.key]);

    useEffect(() => {
        onComplete(task.key, isCompleted);
    }, [isCompleted, task.key]);

    const handleChange = () => {
        const newCompleted = !isCompleted;
        setIsCompleted(newCompleted);
        onComplete(task.key, newCompleted);
        localStorage.setItem(`task-${task.key}-completed`, JSON.stringify(newCompleted));
    };

    return {
        isCompleted,
        handleChange
    };
}
