import React, { useEffect, useState } from 'react';
import { JOB, JOBDETAILS } from '@/types/job';
import LinkSVG from '@/assets/link.svg'
import SalarySVG from '@/assets/salary.svg'
import LocationSVG from '@/assets/location.svg'
import BookmarkSVG from '@/assets/bookmark.svg'
import Image from 'next/image';


const JobDetail = ({ ActiveJob }: { ActiveJob?: JOB }) => {

  const [currentJobDetails, setCurrentJobDetails] = useState<JOBDETAILS | null>()
  const [loadingJobResults, setLoadingJobResults] = useState<boolean>(false)
  const [errorJobResults, setErrorJobResults] = useState<string | null>(null)
  if (!ActiveJob) return null;

  useEffect(() => {
    const getJobDetails = async (jobUrl: string) => {
       
      const formData = new FormData()
      formData.set("jobUrl", jobUrl)

      setLoadingJobResults(true)
      setErrorJobResults("")
      try {
        let response = await fetch('/api/job', {
          method: 'POST',
          body: formData,
        });
        const results = await response.json()
        if (results.error) {
          setErrorJobResults(results.error)
        }
        else {
          setCurrentJobDetails(results.data)
        }
         
      } catch (error) {
        // Handle error
        setErrorJobResults("Error Submitting Form")
        console.error('Error submitting form:', error);
      }
      finally {
        setLoadingJobResults(false)
      }
    }
    getJobDetails(ActiveJob.detailsLink)


  }, [ActiveJob])


  return (
    <div className={`ActiveJob-detail p-4 h-[96dvh] min-w-[50%] "hidden md:block border-2 border-[#660066] rounded-lg sticky top-[1rem] " overflow-auto`}>
      {
        loadingJobResults && <div>Loading</div>
      }
      {
        errorJobResults && <div>Error</div>
      }
      {
        (!loadingJobResults && !errorJobResults) &&
        <div>
          <div className=' flex flex-col gap-1'>
            <h2 className="text-2xl font-bold mb-2">{currentJobDetails?.title}</h2>
                <a className='flex gap-1 underline' href={currentJobDetails?.companyLink}>{currentJobDetails?.companyName}

                <Image src={LinkSVG} width={20} height={20} alt='linker svg' />
                </a>
          </div>
          <div className='flex gap-3'>
            <button className='flex gap-1 px-6 py-3 justify-center bg-red-300'>
              Apply
              <Image src={LinkSVG} height={15} width={15} alt='link svg' />
            </button>
            <button className='flex gap-1 px-6 py-3'>
              Bookmark
              <Image src={BookmarkSVG} height={25} width={25} alt='Bookmark svg' />

            </button>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-bold'>Job Details</h3>
            <div className='flex flex-col'>
              <div className='flex gap-3'>
                <Image height={25} width={25} src={SalarySVG} alt='salary svg' />
                <p>Pay</p>
              </div>
              <p className='pl-9'>{currentJobDetails?.salary}</p>
            </div>
            <div className='flex flex-col'>
              <div className='flex gap-3'>
                <Image height={25} width={25} src={LocationSVG} alt='Location svg' />
                <p>Location</p>
              </div>
              <p className='pl-9'>{currentJobDetails?.location}</p>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='text-xl font-bold'>Full Job Description</h3>
            <p>{currentJobDetails?.description}</p>
          </div>
        </div>
      }
    </div>
  );
};
// title,
//                 companyName,
//                 companyLink,
//                 location,
//                 salary,
//                 // jobType,
//                 applyLink,
//                 description
export default JobDetail;
