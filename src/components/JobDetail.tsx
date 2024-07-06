import React from 'react';
import { JOB } from '@/types/job';
const JobDetail = ({ ActiveJob, isModal }: {ActiveJob?: JOB,isModal: boolean} ) => {
  if (!ActiveJob) return null;

  return (
    <div className={`ActiveJob-detail p-4 h-[98dvh] max-w-[900px]  ${isModal && "hidden md:block border-2 border-[#660066] rounded-lg sticky top-0"}`}>
      <h2 className="text-xl font-bold mb-2">{ActiveJob.title}</h2>
      <p className="mb-2">{ActiveJob.company}</p>
      <div>
         {ActiveJob.summary.map(item => <li>{item}</li>)}
          </div>
      <p className="text-gray-500">{ActiveJob.datePosted.replace("Posted","")}</p>
    </div>
  );
};

export default JobDetail;
