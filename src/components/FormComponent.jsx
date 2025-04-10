import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { FormView } from '../views/FormView';

export default function FormComponent({ initialValues = {}, onSave, onCancel }) {
    const {
        formData,
        errors,
        handleChange,
        checkValidity,
        initializeForm
    } = useForm(initialValues);

    // Inicialización segura del formulario
    useEffect(() => {
        initializeForm(initialValues);
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkValidity()) {
            onSave(formData);
        }
    };

    return (
        <FormView
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={onCancel}
            isValid={checkValidity()}
        />
    );
}