import { create } from "zustand";

const applicationStore = create((set) => ({
  applications: [],
  setApplications : (appli) => set(state=>({applications:appli}))
}));

export default applicationStore