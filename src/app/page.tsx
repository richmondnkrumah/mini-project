import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DiscoverIllustration from '@/assets/discover.svg'
import FilterIllustration from '@/assets/filter.svg'
import InstantIllustration from '@/assets/instant.svg'
type Props = {}

const Index = (props: Props) => {
  return (
    <>
      <Header isLandingPage={true} />
      <main className='grow flex flex-col gap-24'>
        <div className='text-center flex flex-col h-[60vh] justify-center items-center gap-8'>
          <h1 className='text-7xl'>Unlock Your <b className='text-[#660066]'>Career potential</b> <br></br>with NicheJobs</h1>
          <Link className='h-14 px-8 rounded-lg bg-[#660066] w-fit flex items-center text-white ' href="/home">Get Started</Link>
        </div>
        <div className='px-[5%] flex flex-col gap-16'>
          <div className='flex lg:h-[400px] flex-col lg:flex-row gap-5 lg:gap-0 '>
            <div className='flex  grow order-2 gap-5 lg:gap-0 lg:order-none'>

              <div className='min-w-[50%]'>
                <Image className='h-full w-full' src={InstantIllustration} alt='instant access Illustration' />
              </div>
              <div className='flex flex-col gap-5 mt-5'>
                <span className='h-10 px-6 bg-[#FFEBFF] text-[#660066] flex items-center w-fit rounded-full '>Our Services</span>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-5xl'>Instant Access <br /> No Sign-Ups!</h2>
                  <p className='text-lg'>Jump into endless job opportunities without registration hassle. <br /> Your dream job is just a click away, no strings attached! <br /> Enjoy a seamless browsing experience with no barriers. <br /> Start exploring your future career now.</p>
                </div>
              </div>
            </div>
            <div className='grow order-1 lg:order-none h-full flex items-center justify-center'>
              <span className='bg-[#660066] h-20 w-20 flex items-center justify-center text-3xl text-white rounded-full'>1</span>
            </div>
          </div>
          <div className='flex lg:h-[400px] flex-col lg:flex-row gap-5 lg:gap-0  '>
            <div className='grow h-full  flex items-center justify-center'>
              <span className='bg-[#660066] h-20 w-20 flex items-center justify-center text-3xl text-white rounded-full'>2</span>
            </div>
            <div className='flex  grow gap-5'>
              <div className='flex flex-col gap-5 mt-5'>
                <span className='h-10 px-6 bg-[#FFEBFF] text-[#660066] flex items-center w-fit rounded-full '>Our Services</span>
                <div className='flex flex-col gap-3'>

                  <h2 className='text-5xl'>Discover Over 1000+ Jobs!</h2>
                  <p className='text-lg'>Unlock a world of career possibilities with over a thousand job openings. <br /> Explore diverse industries and find the perfect role for you. <br /> Stay updated with the latest job listings in real-time.</p>
                </div>
              </div>
              <div className='min-w-[50%] '>
                <Image className=' h-full w-full' src={DiscoverIllustration} alt='instant access Illustration' />
              </div>
            </div>
          </div>
          <div className='flex lg:h-[400px] flex-col gap-5 lg:gap-0 lg:flex-row '>
            <div className='flex order-2 gap-5 lg:gap-0 lg:order-none grow'>
              <div className='min-w-[50%]'>
                <Image className='h-full w-full ' src={FilterIllustration} alt='instant access Illustration' />
              </div>
              <div className='flex flex-col gap-5 mt-5'>
                <span className='h-10 px-6 bg-[#FFEBFF] text-[#660066] flex items-center w-fit rounded-full '>Our Services</span>
                <div className='flex flex-col gap-3'>
                  <h2 className='text-5xl'>Tailor Your  Job Search</h2>
                  <p className='text-lg '>Easily bookmark your favorite listings jobs based on your experience. <br /> Make your job search as unique as you are. <br /> Customize your search to match your career goals and preferences. <br /> Finding the right job has never been this easy.</p>
                </div>
              </div>
            </div>
            <div className='grow order-1 lg:order-none h-full flex items-center justify-center'>
              <span className='bg-[#660066] h-20 w-20 flex items-center justify-center text-3xl text-white rounded-full'>3</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center py-20 bg-[#660066]'>
          <div className='text-center flex flex-col gap-2 text-white'>
            <p>#1 JOB PORTAL</p>
            <h2 className='text-6xl'>Discover Your Next Career <br></br> Move With Ease</h2>
            <div className='flex gap-5 justify-center mt-8'>
              <Link href={"/home"} className=' h-12 px-6 rounded-lg flex items-center border  bg-white text-[#660066]'>Start job search</Link>
              <Link href={"/about"} className=' h-12 px-6 rounded-lg flex items-center border'>Learn More</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </>

  )
}

export default Index