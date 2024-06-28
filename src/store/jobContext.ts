import { create } from "zustand";
import { JOB } from "@/types/job";


interface JobState {
  jobs?: JOB[],
  setNewJobResults: (jobResults: any) => void  
  
}

export const useJobStore = create<JobState>()((set) => ({
  jobs: undefined,
  setNewJobResults: (jobResults: any) => set(state => ({ jobs: jobResults}))
}));
