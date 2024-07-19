import { create } from "zustand";
import { JOB } from "@/types/job";


interface JobState {
  jobs?: JOB[],
  rawJobs?: JOB[],
  setNewJobResults: (jobResults: any) => void  
  clearCurrentJobs: () => void
  setRemoteOnlyJobs: (shouldFilter: boolean) => void
  
}

export const useJobStore = create<JobState>()((set) => ({
  jobs: undefined,
  rawJobs: undefined,
  setNewJobResults: (jobResults: any) => set({ jobs: jobResults, rawJobs: jobResults}),
  clearCurrentJobs: () => set({jobs: undefined}),
  setRemoteOnlyJobs: (shouldFilter) => set(state => ({jobs: shouldFilter ? state.jobs?.filter(currJob => currJob.isRemote) : state.rawJobs}))
}));
