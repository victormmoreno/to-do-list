import { create } from 'zustand';
import useFormStore from './formStore';

const useModalStore = create((set) => ({
  isModalOpen: false,
  currentTask: null,

  openModal: (task) => {
    set({ isModalOpen: true, currentTask: task });
  },
  
  closeModal: () => {
    useFormStore.getState().resetForm();
    set({ isModalOpen: false, currentTask: null });
  }
}));

export default useModalStore;