import { create } from "zustand";

const currentIdStore = create((set) => ({
  currentCandidatId:null,
  setCurrentCandidatId : (id) => set(state=>({currentCandidatId:id})),

   currentappliId:null,
  setCurrentappliId : (id) => set(state=>({currentappliId:id}))
}));

export default currentIdStore




