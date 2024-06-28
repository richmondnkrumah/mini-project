import { auth } from '@/utils/auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {}


const ResponsiveMenu = async (props: Props) => {
  const session = await auth()
  console.log(session, 'sesssssion')

  if (!session?.user) return (
    <div className="dropdown dropdown-end lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={"/account"}>Login</Link>
        </li>
      </ul>
    </div>)

  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={"#"}>Profile</Link>
        </li>
        <li>
          <Link href={"#"}>Settings</Link>
        </li>
        <li>
          <Link href={"#"}>Sign Out</Link>
        </li>
      </ul>
    </div>
  )
}

export default ResponsiveMenu