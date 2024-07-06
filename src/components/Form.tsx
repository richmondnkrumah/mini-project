'use client'
import { ChangeEvent, useState } from 'react'

import GOOGLE_ICON from '@/assets/google.svg'
import GITHUB_ICON from '@/assets/github.svg'
import Image from 'next/image'
import Login from './Login'
import Signup from './Signup'
import { authWithGithub, authWithGoogle, signInwithCredentials } from '@/utils/actions'

type Props = {
  mode: "login" | "create" | null
}

const Form = ({mode}: Props) => {
  const [accountMode, setAccountMode] = useState<'login' | 'create'>( mode ?? 'login')
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirm, setPasswordConfirm] = useState<string>("")

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>, handlerChoice: string) => {
    switch (handlerChoice) {
      case "email":
        setEmail(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
      case "passwordConfirm":
        setPasswordConfirm(event.target.value)
      default:
        break;
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-slate-200 flex h-14 rounded-xl p-1'>
        <div className='grow  '>
          <button className={`${accountMode === 'login' && 'bg-white'} rounded-xl w-full h-full transition-colors duration-300 font-bold`} onClick={() => setAccountMode('login')} >Sign In</button>
        </div>
        <div className='grow '>
          <button className={`${accountMode === 'create' && 'bg-white'} rounded-xl w-full h-full transition-colors duration-300 font-bold`} onClick={() => setAccountMode
            ('create')}>Sign Up</button>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div>
          {accountMode === 'login' && <Login email={email} password={password} changeHandler={onChangeHandler} />}
          {accountMode === 'create' &&
            <Signup email={email} password={password} passwordConfirm={passwordConfirm} changeHandler={onChangeHandler} />}
          
        </div>
        <div className=' flex items-center'>
          <span className='block h-[2px] w-full bg-slate-300'></span>
          <span className='w-full text-center text-slate-400 '>Or Continue With</span>
          <span className='block h-[2px] w-full bg-slate-300'></span>
        </div>
        <div className='flex items-center justify-center gap-10'>
          <form action={authWithGoogle}>

            <button type='submit'><Image className='w-[50px] h-[50px]' src={GOOGLE_ICON} alt='Google Icon' /></button>
          </form>
          <form action={authWithGithub}>
            <button type='submit'><Image className='w-[42px] h-[42px]' src={GITHUB_ICON} alt='Github Icon' /></button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Form