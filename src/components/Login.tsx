import { signInwithCredentials } from '@/utils/actions'
import Link from 'next/link'
import React, { ChangeEvent } from 'react'

type Props = {
  email: string,
  password: string,
  changeHandler: (event: ChangeEvent<HTMLInputElement>, handlerChoice: string) => void
}

const Login = ({ email, password, changeHandler }: Props) => {
  return (
    <form action={signInwithCredentials}>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
          <input name="email" className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' placeholder='johndoe@gmail.com' type='text' value={email} onChange={(e) => changeHandler(e, "email")} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <input className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' placeholder='Password' type='password' name='password' value={password} onChange={(e) => changeHandler(e, "password")} />
        </div>
        <div className=' text-end'>
          <Link href={'/account/recover'} className='text-sm text-slate-400 hover:text-black hover:underline'>Forgot Password?</Link>
        </div>
      </div>
      <div className='h-14 flex justify-center mt-5'>
        <button className='h-full w-fit bg-blue-300 px-14 rounded-xl' type='submit'>Sign in </button>
      </div>
    </form>
  )
}

export default Login