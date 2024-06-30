import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/server'
import { handleSignOut } from '@/utils/actions'


const UserAvatar = async () => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  

  if (error || !data?.user) return (
    <Link href={'/account'}>
      <div
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="CSS"
            src="../../imger.jpg"
          />
        </div>
      </div>
    </Link>)
  console.log(data,"this is supabase data user")
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="CSS"
                        />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={"/account"} className="justify-between">
            Profile
          </Link>
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

export default UserAvatar