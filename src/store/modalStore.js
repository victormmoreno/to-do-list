import { create } from 'zustand';

const useModalStore = create((set) => ({
  isModalOpen: false,
  currentTask: null,

  openModal: (task) => {
    set({ isModalOpen: true, currentTask: task });
  },
  closeModal: () => {
    set({ isModalOpen: false, currentTask: null });
    useFormStore.getState().resetForm();
  }
}));

export default useModalStore;
