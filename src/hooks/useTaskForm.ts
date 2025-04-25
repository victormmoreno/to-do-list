import { useCallback, useState } from "react";
import { Task, TaskFormData } from "../types/task";
import { TaskService } from "../services/taskService";

export const useTaskForm = (initialTask?: Task) => {
    const [formData, setFormData] = useState<TaskFormData>({
        title: initialTask?.title || '',
        description: initialTask?.description || '',
        limit_date: initialTask?.limit_date || '',
    })

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = useCallback((name: keyof TaskFormData, value: string) => {
        const taskToValidate = { ...formData, [name]: value };
        const { errors: validationErrors } = TaskService.validateTask(taskToValidate);

        setErrors(prev => ({
            ...prev,
            [name]: validationErrors[name] || ''
        }));
        return !validationErrors[name];
    }, [formData]);


    const handleChange = useCallback((name: keyof TaskFormData, value: string ) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        validateField(name, value);
    }, [validateField]);

    const isValid = useCallback(() => {
        const { isValid } = TaskService.validateTask(formData);
        return isValid;
    }, [formData])

    const resetForm = useCallback(() => {
        setFormData({
            title: '',
            description: '',
            limit_date: ''
        });
        setErrors({});
    }, [])

    return {
        formData,
        errors,
        handleChange,
        isValid,
        resetForm
    }
}
