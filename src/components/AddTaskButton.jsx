import { useAddTask } from '../hooks/useAddTask';
import { AddTaskButtonView } from '../views/AddTaskButtonView';
import FormComponent from './FormComponent';
import Modal from './Modal';

export function AddTaskButton({ onAdd }) {
    const { 
        isOpen,
        handleOpen,
        handleClose,
        handleSave
    } = useAddTask({ onAdd });

    return (
        <>
            <AddTaskButtonView onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </AddTaskButtonView>
            
            {isOpen && (
                <Modal onClose={handleClose}>
                    <h2 className="text-xl font-bold mb-4">Nueva Tarea</h2>
                    <FormComponent 
                        initialValues={{
                            title: '',
                            description: '',
                            limit_date: ''
                        }}
                        onSave={handleSave}
                        onCancel={handleClose}
                    />
                </Modal>
            )}
        </>
    );
}
