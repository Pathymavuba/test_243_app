import { create } from "zustand";

const candidatStore = create((set) => ({
  candidats: [],
  setCandidats : (list) => set(state=>({candidats:list}))
}));

export default candidatStore