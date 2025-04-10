import useModalStore from '../store/modalStore';
import useFormStore from '../store/formStore'; 
import { formatDateForInput } from '../utils/dateFormatter';

export function useEditButton({ task, onEdit, disabled = false }) {
    const { isModalOpen, openModal, closeModal } = useModalStore();
    const { initializeForm } = useFormStore();

    const handleOpen = () => {
        if (!disabled) {
            // Reset form
            useFormStore.getState().resetForm();
            
            // Initialize with formatted data
            initializeForm({
                ...task,
                limit_date: task.limit_date ? formatDateForInput(task.limit_date) : ''
            });
            
            // Open modal
            openModal(task);
        }
    };

    const handleClose = () => closeModal();

    const handleSave = (formData) => {
        onEdit({
            ...formData,
            key: task.key,
            limit_date: new Date(formData.limit_date).toISOString()
        });
        handleClose();
    };

    return {
        isModalOpen,
        handleOpen, 
        handleClose,
        handleSave
    };
}