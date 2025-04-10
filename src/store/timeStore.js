import { create } from 'zustand';

const useTimeStore = create((set) => ({
  currentTime: new Date(),
  updateTime: (newTime) => set({ currentTime: newTime }),
}));

export default useTimeStore;
