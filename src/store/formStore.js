import { create } from 'zustand';
import { formatDateForInput } from '../utils/dateFormatter';

const useFormStore = create((set) => ({
  errors: {},
  formData: {
    title: '',
    description: '',
    limit_date: ''
  },

  // Actions
  setFormData: (data) => set({ formData: data }),
  setErrors: (errors) => set({ errors }),

  validateField: (name, value) => {
    let error = '';
    switch(name) {
      case 'title':
        if (!value.trim()) error = 'El título de la tarea es requerido';
        else if (value.length < 5) error = 'Mínimo 5 caracteres';
        break;
      case 'limit_date':
        if (!value) error = 'La fecha es requerida';
        else if (new Date(value) < new Date()) error = 'La fecha no puede ser en el pasado';
        break;
    }
    set((state) => ({ 
      errors: { ...state.errors, [name]: error } 
    }));
  },

  checkValidity: () => {
    const state = useFormStore.getState();
    const noErrors = Object.values(state.errors).every(err => !err);
    const allRequiredFields = state.formData.title && state.formData.limit_date;
    return noErrors && allRequiredFields;
  },

  resetForm: () => set({
    formData: { title: '', description: '', limit_date: '' },
    errors: {}
  }),

  initializeForm: (initialValues) => {
    set({
      formData: {
        title: initialValues?.title || '',
        description: initialValues?.description || '',
        limit_date: initialValues?.limit_date ? formatDateForInput(initialValues.limit_date) : ''
      },
      errors: {}
    });
  }
}));

export default useFormStore;
