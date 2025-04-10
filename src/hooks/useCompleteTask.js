import useTaskStore from '../store/taskStore';

export function useCompleteTask({ task }) {
    const { completeTask } = useTaskStore();

    const handleChange = () => {
        completeTask(task.id);
    };

    return {
        isCompleted: task.completed,
        handleChange
    };
}