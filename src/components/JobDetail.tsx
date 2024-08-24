import React, { useEffect, useState } from 'react';
import { JOB, JOBDETAILS } from '@/types/job';
import LinkSVG from '@/assets/link.svg'
import SalarySVG from '@/assets/salary.svg'
import LocationSVG from '@/assets/location.svg'
import BookmarkSVG from '@/assets/bookmark.svg'
import Image from 'next/image';
import ContentLoading from './ContentLoading';
import ServerDownIllustration from '@/assets/serverdown.svg'



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

  console.log("This is the apply link baby girls", currentJobDetails)

  return (
    <div className={`ActiveJob-detail p-4 h-[96dvh] min-w-[50%] "hidden md:block border-2 border-[#660066] rounded-lg sticky top-[1rem] " overflow-auto`}>
      {
        loadingJobResults &&
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <ContentLoading />
          <p className="text-lg">Getting Additional Job details from Scraper</p>

        </div>
      }
      {
        errorJobResults &&
        <div className=" flex flex-col items-center justify-center h-full">
          <Image className="max-h-[80%] max-w-[80%]" src={ServerDownIllustration} alt="Error from Server" />
          <p className="text-2xl">The Scraper ran into an Error</p>
          <p className="text-2xl text-[#660066]">Please Try Again</p>
        </div>
      }
      {
        (!loadingJobResults && !errorJobResults) &&
        <div>
          <div className=' flex flex-col gap-1'>
            <h2 className="text-3xl font-bold">{currentJobDetails?.title}</h2>
            <a target='_blank' className='flex gap-1 underline' href={currentJobDetails?.companyLink}>{currentJobDetails?.companyName.split('.')[0]}

              <Image src={LinkSVG} width={20} height={20} alt='linker svg' />
            </a>
          </div>
          <div className='flex gap-5 my-3'>
            <button className='flex gap-1 px-6 py-3 justify-center items-center bg-[#660066] rounded-xl'>
              <a target='_blank' href={currentJobDetails?.applyLink} className='text-white'> Apply</a>
              <Image src={LinkSVG} height={15} width={15} alt='link svg' className='invert'/>
            </button>
            <button className='flex gap-1 px-4 py-2 items-center bg-[#660066] rounded-xl'>
              <Image src={BookmarkSVG} className=' invert' height={25} width={25} alt='Bookmark svg' />

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
            <p className=' whitespace-pre-line'>{currentJobDetails?.description.replaceAll(/(\n\s+)+/g,"\n").replace("\n","")}</p>
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
