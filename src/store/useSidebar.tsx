import { create } from "zustand";

// Define the type for the state
interface SidebarState {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

// Create the Zustand store
export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
