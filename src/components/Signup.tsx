import React, { ChangeEvent } from 'react'

type Props = {
  email: string,
  password: string,
  passwordConfirm: string
  changeHandler: (event: ChangeEvent<HTMLInputElement>,handlerChoice: string) => void

}


const Signup = ({email,password,passwordConfirm,changeHandler}: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="new_email">Email</label>
        <input placeholder='email' className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' type='text' value={email} onChange={(e) => changeHandler(e,"email")} />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="new_password">Set Password</label>
        <input placeholder='password' className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' type='password' value={password} onChange={(e) => changeHandler(e,"password")}/>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="new_password_confirm">Confirm Password</label>
        <input placeholder='Confirm Password' className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' type='password' value={passwordConfirm} onChange={(e) => changeHandler(e,"passwordConfirm")}/>
      </div>
    </div>

  )
}

export default Signup