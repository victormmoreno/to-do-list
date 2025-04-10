import useFormStore from '../store/formStore';

export function useForm(initialValues = {}) {
    const { 
        formData, 
        errors, 
        setFormData, 
        validateField, 
        checkValidity,
        resetForm
    } = useFormStore();

    const initializeForm = (values) => {
        useFormStore.getState().initializeForm(values || initialValues);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    return {
        formData,
        errors,
        handleChange,
        checkValidity,
        initializeForm,
        resetForm
    };
}
