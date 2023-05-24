import { create } from "zustand";

const currentIdStore = create((set) => ({
  currentCandidatId: [],
  setCurrentCandidatId : (id) => set(currentCandidatId=>({questions:id}))
}));

export default currentIdStore




