import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100 px-4">
          <div className="navbar-start">
            <Link href={"/"} className="btn btn-ghost text-xl hover:bg-transparent text-[#660066]">NicheJobs</Link>
          </div>


        </div>
      </header>
      <main className='grow ml-10'>
        <h1 className='text-3xl font-bold'> Hi, I am Richmond Nkrumah</h1>
        <p>This is my mini project for the semester under supervision of Professor Micheal Asante, KNUST

        </p>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
