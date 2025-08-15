import { create } from 'zustand';

const useUI = create((set) => ({
  showCompleted: true,
  toggleShowCompleted: () => set((s) => ({ showCompleted: !s.showCompleted })),
  pendingId: null,
  setPendingId: (id) => set({ pendingId: id }),
}));

export { useUI };
