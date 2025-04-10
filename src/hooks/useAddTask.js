import { useState } from 'react';

export function useAddTask({ onAdd }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSave = (formData) => {
        onAdd({
            ...formData,
            limit_date: new Date(formData.limit_date).toISOString()
        });
        handleClose();
    };

    return {
        isOpen,
        handleOpen,
        handleClose,
        handleSave
    };
}
