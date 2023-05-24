import { create } from "zustand";

const questionStore = create((set) => ({
  questions: [],
  setQuestions : (question) => set(state=>({questions:question}))
}));

export default questionStore