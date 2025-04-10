import { useSort } from '../hooks/useSort';
import { SortView } from '../views/SortView';

export default function SortComponent({ onSortChange }) {
    const { sortField, sortDirection, handleSortChange } = useSort();

    const handleFieldChange = (field) => {
        const newSort = handleSortChange(field, null);
        onSortChange(newSort.field, newSort.direction);
    };

    const handleDirectionToggle = () => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        const newSort = handleSortChange(null, direction);
        onSortChange(newSort.field, newSort.direction);
    };

    return (
        <SortView
            sortField={sortField}
            sortDirection={sortDirection}
            onFieldChange={handleFieldChange}
            onDirectionChange={handleDirectionToggle}
        />
    );
}
