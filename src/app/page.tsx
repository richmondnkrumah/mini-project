import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Index = (props: Props) => {
  return (
    <>
      <Header isLandingPage={true} />
      <main className='grow pt-20 flex flex-col gap-20'>
        <div className='text-center flex flex-col items-center gap-8 '>
          <h1 className='text-7xl'>Unlock Your <b className='text-purple-500'>Career potential</b> <br></br>with NicheJobs</h1>
          <Link className='h-14 px-8 rounded-lg bg-purple-500 w-fit flex items-center text-white ' href="/home">Get Started</Link>
        </div>

      </main>
      <Footer />

    </>

  )
}

export default Index