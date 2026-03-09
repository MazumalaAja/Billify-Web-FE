// IMPORT
import { create } from "zustand";

// TYPE
interface UIState {
  openToggle: boolean;
  setOpenToggle: (value: boolean) => void;
}

// STORE
const useUIStore = create<UIState>((set) => ({
  openToggle: false,
  setOpenToggle: (value) => set({ openToggle: value }),
}));

// EXPORT
export default useUIStore;