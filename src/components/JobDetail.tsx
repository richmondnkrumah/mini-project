import React from 'react';
import { JOB } from '@/types/job';
const JobDetail = ({ ActiveJob, isModal }: {ActiveJob?: JOB,isModal: boolean} ) => {
  if (!ActiveJob) return null;

  return (
    <div className={`ActiveJob-detail p-4 max-w-[900px] ${isModal && "hidden md:block"}`}>
      <h2 className="text-xl font-bold mb-2">{ActiveJob.role}</h2>
      <p className="mb-2">{ActiveJob.company_name}</p>
      <div> {ActiveJob.text} </div>
      <p className="text-gray-500">Posted {ActiveJob.date_posted}</p>
    </div>
  );
};

export default JobDetail;
