import { create } from "zustand";

// Define the type for the state
interface ActiveLinkState {
  activeLink: number;
  setActiveLink: (activeLink: number) => void; // Adjusted type
}

// Create the Zustand store
export const useActiveLink = create<ActiveLinkState>((set) => ({
  activeLink: 1,
  setActiveLink: (activeLink: number) => set({ activeLink }),
}));
