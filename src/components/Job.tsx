import { JOB } from "@/types/job";
import React from "react";
type Props = {
  jobData: JOB;
  activeJobHandler: (id: string) => void

};

const Job = ({ jobData, activeJobHandler }: Props) => {
  return (
    <div onClick={() => activeJobHandler(jobData.id)} className="card rounded-lg cursor-pointer min-w-fit border border-[#660066] card-compact p-3">
      <div className="card-title justify-between">
        <span>{jobData.title}</span>
      </div>
      <div className="card-body ">
        <div className="flex flex-col gap-1 font-bold">
          <span>{jobData.company}</span>
          <span>{jobData.location}</span>
        </div>
        <div>
          {
            jobData.summary.slice(0,2).map(item => <li key={item}>{item}</li>)
          }
        </div>
      </div>
      <div className="flex justify-end">
        <p>{jobData.datePosted.replace("Posted", "")}</p>
      </div>
    </div>
  );
};

export default Job;
