import React from 'react';
import { JOB } from '@/types/job';
const JobDetail = ({ ActiveJob, isModal }: {ActiveJob?: JOB,isModal: boolean} ) => {
  if (!ActiveJob) return null;

  return (
    <div className={`ActiveJob-detail p-4 max-w-[900px] ${isModal && "hidden md:block border-2 border-purple-500"}`}>
      <h2 className="text-xl font-bold mb-2">{ActiveJob.title}</h2>
      <p className="mb-2">{ActiveJob.company}</p>
      <div> {ActiveJob.summary} </div>
      <p className="text-gray-500">{ActiveJob.datePosted}</p>
    </div>
  );
};

export default JobDetail;
