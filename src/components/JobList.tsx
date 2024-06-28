import React from "react";
import { JOB } from "@/types/job";
import Job from "./Job";
type Props = {
  jobResults?: JOB[];
  activeJobHandler: (id: string) => void;
};
const paginate = (maxList: number, results?: JOB[]) => {
  if (!results) return [];
  let finalResults = [];
  let tempResults = [];
  let indexPointer = 1;
  for (let currentJob in results) {
    tempResults.push(currentJob);
    if (indexPointer >= maxList) {
      indexPointer++;
      finalResults.push(tempResults);
      tempResults = [];
    }
  }
  return finalResults;
};

const JobList = ({ jobResults, activeJobHandler }: Props) => {
  console.log(JobList, "this is a jobResults");
  const paginatedJobResults = paginate(10, jobResults);
  return (
    <section className="flex flex-col gap-5">
      {jobResults &&
        jobResults?.map((job) => (
          <Job activeJobHandler={activeJobHandler} key={job.id} jobData={job} />
        ))}
    </section>
  );
};

export default JobList;
