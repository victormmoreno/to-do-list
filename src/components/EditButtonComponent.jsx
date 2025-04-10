import { useState } from 'react';
import { EditButtonView } from "../views/EditButtonView";
import FormComponent from "./FormComponent";
import Modal from "./Modal";
import useTaskStore from "../store/taskStore";

export function EditButtonComponent({ task, disabled = false }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { updateTask } = useTaskStore();

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);
    const handleSave = (values) => {
        updateTask({
            ...task,
            ...values
        });
        handleClose();
    };

    return (
        <>
            <EditButtonView 
                isOpen={isModalOpen}
                onOpen={handleOpen}
                onClose={handleClose}
                disabled={disabled}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </EditButtonView>
            
            {isModalOpen && (
                <Modal onClose={handleClose}>
                    <h2 className="text-xl font-bold mb-4">Editar Tarea</h2>
                    <FormComponent 
                        initialValues={{
                            title: task.title,
                            description: task.description,
                            limit_date: task.limit_date
                        }}
                        onSave={handleSave}
                        onCancel={handleClose}
                    />
                </Modal>
            )}
        </>
    );
}
