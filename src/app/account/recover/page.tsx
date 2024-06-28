'use client'
import { ChangeEvent, useState } from 'react'
type Props = {}

const recoverAccount = (props: Props) => {
  const [email, setEmail] = useState<string>("")
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  return (
    <main className='flex min-h-[100dvh] bg-slate-100 justify-center items-center'>
      <div className='w-fit'>
        <div className="card bg-base-100 shadow-xl">
          <div className='card-title justify-center mt-5 flex-col gap-1 mb-0 '>
              <p className='text-3xl'>Enter Recovery Email</p>
          </div>
          <form action={""} className="card-body w-[480px] gap-5">
            <div className='flex flex-col gap-1'>
              <input name="email" className='h-12 border-2 rounded-xl focus-within:outline-slate-300 indent-5' placeholder='johndoe@gmail.com' type='text' value={email} onChange={(e) => changeHandler(e)} />
            </div>
            <div className='h-14 flex justify-center'>
              <button className='h-full w-fit bg-blue-300 px-10 rounded-xl' type='submit'>Send Password Reset Link  </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default recoverAccount