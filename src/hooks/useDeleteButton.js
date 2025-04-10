import useTaskStore from '../store/taskStore';

export function useDeleteButton({ disabled = false }) {
    const { deleteTask } = useTaskStore();

    const handleDelete = (taskId) => {
        if (!disabled) {
            deleteTask(taskId);
        }
    };

    return {
        handleDelete
    };
}