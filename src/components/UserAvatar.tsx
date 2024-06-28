import Link from 'next/link'
import React from 'react'
import { auth, signOut } from '@/utils/auth'

const UserAvatar = async () => {
  const session = await auth()
  console.log(session, 'sesssssion')

  if (!session?.user) return (
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
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
          <form action={async () => {
            "use server"
            await signOut()
          }}>
            <button type="submit">Log out</button>
          </form>
        </li>
      </ul>
    </div>
  )
}

export default UserAvatar