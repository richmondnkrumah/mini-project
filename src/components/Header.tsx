import Link from 'next/link'
import React from 'react'
import UserAvatar from './UserAvatar'
import ResponsiveMenu from './responsiveMenu'


const Header = ({ isLandingPage }: { isLandingPage: boolean }) => {

  return (
    <header>
      <div className="navbar bg-base-100 px-4">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl hover:bg-transparent text-[#660066]">NicheJobs</Link>
        </div>

        <div className="navbar-end ">
          <ResponsiveMenu />
          {
            isLandingPage ?
              <div className='hidden lg:flex gap-4'>
                <Link className='h-12 border rounded-lg w-fit px-7 text-[#660066] border-[#660066] flex items-center font-bold' href={"/account?mode=login"}>Login</Link>
                <Link className='h-12 border border-[#660066] rounded-lg w-fit px-7 text-white bg-[#660066] flex items-center font-bold' href={"/account?mode=create "}>Sign Up</Link>
              </div>
              :
              <div className="hidden lg:flex ">
                <UserAvatar />
              </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header

