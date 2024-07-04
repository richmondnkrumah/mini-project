import Link from 'next/link'
import React from 'react'
import { createClient } from '@/utils/supabase/server'
import { handleSignOut } from '@/utils/actions'

type Props = {}


const ResponsiveMenu = async (props: Props) => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()


  if (error || !data?.user) return (
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
          <Link href={"/account?mode=login"}>Login</Link>
          <Link href={"/account?mode=create"}>Sign Up</Link>
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
        <form action={handleSignOut}>
            <button type="submit">Log out</button>
          </form>
        </li>
      </ul>
    </div>
  )
}

export default ResponsiveMenu