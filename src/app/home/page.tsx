"use client";
import { FormEvent, useState } from "react";
import { useJobStore } from "@/store/jobContext";
import Filters from "@/components/Filters";
import JobList from "@/components/JobList";
import JobDetail from "@/components/JobDetail";
import { JOB } from "@/types/job";
import { useRouter } from "next/navigation";
import ServerDownIllustration from '@/assets/serverdown.svg'
import Image from "next/image";
import ContentLoading from "@/components/ContentLoading";
type Props = {};

const HomePage = (props: Props) => {
  const router = useRouter();

  const [jobTitle, setjobTitle] = useState<string>("")
  const [jobLocation, setJobLocation] = useState<string>("")
  const [activeJob, setActiveJob] = useState<undefined | JOB>(undefined);
  const [loadingJobResults, setLoadingJobResults] = useState<boolean>(false)
  const [errorJobResults, setErrorJobResults] = useState<string | null>(null)
  const { jobs, clearCurrentJobs, setNewJobResults } = useJobStore();

  const handleKeyDownSubmission = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.preventDefault();
      e.currentTarget.requestSubmit();
    }
  };

  const setActiveJobHandler = (id: string) => {
    if (window.innerWidth <= 768) {
      router.push(`/jobs/${id}`);
    } else {
      setActiveJob(jobs?.find((currJob) => currJob.id === id));
    }
  };


  const handleScraperSearch = async (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData()
    formData.set("jobTitle", jobTitle)
    formData.set("jobLocation", jobLocation)

    setLoadingJobResults(true)
    setErrorJobResults("")
    clearCurrentJobs()
    try {
      let response = await fetch('/api/scrape', {
        method: 'POST',
        body: formData,
      });
      console.log(response, "i dont know bro")
      const results = await response.json()
      if (results.error) {
        setErrorJobResults(results.error)
      }
      else {
        setNewJobResults(results.data)
      }
      console.log(results, "Response from the funcking Scraper")
    } catch (error) {
      // Handle error
      setErrorJobResults("Error Submitting Form")
      console.error('Error submitting form:', error);
    }
    finally {
      setLoadingJobResults(false)
    }

  }
  console.log(jobs, "this is the jobs ");
  return (
    <main className="h-full mx-3 grow flex flex-col">
      <form
        className="flex justify-center w-full"
        onKeyDown={handleKeyDownSubmission}
        onSubmit={handleScraperSearch}
      >
        <div className="w-full flex flex-col gap-y-2 lg:flex-row lg:justify-center items-center">
          <div className="flex flex-col border border-[#660066] rounded-lg lg:border-0 lg:flex-row gap-1 p-1 w-[80%] lg:w-[60%] ">
            <label className="input focus-within:outline-none focus-within:border-0 lg:focus-within:border lg:border-[#660066] grow flex items-center gap-2 rounded-l-full  ">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke="#660066"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M20.9992 21L14.9492 14.95"
                    stroke="#660066"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <input
                type="text"
                name="jobTitle"
                required
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setjobTitle(e.target.value)}
                className="w-fit"

              />
            </label>
            <hr className="lg:hidden border-t-[#660066]"></hr>
            <label className="input focus-within:outline-none focus-within:border-0 lg:focus-within:border lg:border-[#660066] flex items-center grow gap-2 rounded-r-full lg:rounded-none">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#660066"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                    stroke="#660066"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <input
                type="text"
                name="jobLocation"
                placeholder="Location"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                className="w-fit"

              />
            </label>
          </div>
          <div className=" h-12 w-[80%] lg:h-full lg:w-[120px] flex justify-center lg:pr-1 lg:py-1">
            <button type="submit" className="bg-[#660066] lg:rounded-r-full rounded-xl w-full h-full text-center text-white">SEARCH</button>
          </div>
        </div>

      </form>
      {
        errorJobResults &&
        <div className=" flex flex-col items-center justify-center grow">
          <Image className="max-h-[500px] max-w-[500px]" src={ServerDownIllustration} alt="Error from Server" />
          <p className="text-2xl">The Scraper ran into an Error</p>
          <p className="text-2xl text-[#660066]">Please Try Again</p>
        </div>
      }
      {
        loadingJobResults &&
        <div className="flex flex-col gap-10 items-center mt-10 justify-center grow">
          <ContentLoading />
          <p className="text-lg">Getting Content from Scraper</p>

        </div>
      }
     
      {jobs && (
        <section className="flex flex-col w-full mx-auto">
          <Filters />
          <div className="flex gap-[2%] max-w-[1320px] self-center justify-between relative">
            <JobList jobResults={jobs} activeJobHandler={setActiveJobHandler} />
            <JobDetail ActiveJob={activeJob ?? jobs[0]} />
          </div>
        </section>
      )}
    </main>
  );
};

export default HomePage;
