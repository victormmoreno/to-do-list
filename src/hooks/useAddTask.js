import useModalStore from '../store/modalStore';
import useTaskStore from '../store/taskStore';

export function useAddTask() {
    const { openModal, closeModal, isModalOpen } = useModalStore();
    const { addTask } = useTaskStore();

    const handleOpen = () => {
        openModal();
    };

    const handleClose = () => {
        closeModal();
    };

    const handleSave = (formData) => {
        addTask({
            ...formData,
            limit_date: new Date(formData.limit_date).toISOString()
        });
        handleClose();
    };

    return {
        isOpen: isModalOpen,
        handleOpen,
        handleClose,
        handleSave
    };
}