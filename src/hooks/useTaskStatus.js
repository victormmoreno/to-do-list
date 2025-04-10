import useTaskStore from '../store/taskStore';

export function useTaskStatus() {
    const { isOverdue, isNearlyDue } = useTaskStore();
    return { isOverdue, isNearlyDue };
}
