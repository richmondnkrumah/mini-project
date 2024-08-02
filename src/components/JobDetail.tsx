import React, { useEffect, useState } from 'react';
import { JOB } from '@/types/job';
import LinkSVG from '../../public/link.svg'
import Image from 'next/image';
const JobDetail = ({ ActiveJob }: { ActiveJob?: JOB }) => {

  const [currentJobDetails, setCurrentJobDetails] = useState({})
  const [loadingJobResults, setLoadingJobResults] = useState<boolean>(false)
  const [errorJobResults, setErrorJobResults] = useState<string | null>(null)
  if (!ActiveJob) return null;

  useEffect(() => {
    const getJobDetails = async (jobUrl: string) => {
      console.log("this is the url that is wrong",jobUrl)
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
        console.log(results, "Response from the funcking Scraper detail")
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
    <div className={`ActiveJob-detail p-4 h-[98dvh] min-w-[50%]  "hidden md:block border-2 border-[#660066] rounded-lg sticky top-0"`}>
      {
        loadingJobResults && <div>Loading</div>
      }
      {
        errorJobResults && <div>Error</div>
      }
      {
        (!loadingJobResults && !errorJobResults) && <>
        <div className='flex'>
          <h2 className="text-xl font-bold mb-2">{ActiveJob.title}</h2>
          <Image src={LinkSVG} height={25} width={25} alt='company link'/>
        </div>
          <div>
            <span>
              <a href=""></a>
            </span>
            <span></span>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <button>Apply</button>
            <div>

            </div>

          </div>
        </>
      }
    </div>
  );
};

export default JobDetail;
