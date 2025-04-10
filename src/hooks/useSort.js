import useTaskStore from '../store/taskStore';

export function useSort() {
    const { sortField, sortDirection, setSort } = useTaskStore();
    
    const handleSortChange = (field, direction) => {
        const newField = field || sortField;
        const newDirection = direction || sortDirection;
        setSort(newField, newDirection);
        return { field: newField, direction: newDirection };
    };

    return {
        sortField,
        sortDirection,
        handleSortChange
    };
}
