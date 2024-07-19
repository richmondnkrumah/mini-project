'use client'
import Form from '@/components/Form'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
type Props = {}

const Account = (props: Props) => {
  const params = useSearchParams()
  return (
    <Suspense>
      <main className='flex min-h-[100dvh] bg-slate-100 justify-center items-center'>
        <div className='w-fit'>
          <div className="card bg-base-100 shadow-xl">
            <div className='card-title justify-center'>
              <h1 className='text-center text-[#660066]'>NicheJobs</h1>
            </div>
            <div className="card-body w-[480px] gap-5">
              <div className='text-center'>
                <h2 className=' font-semibold text-3xl '>Welcome Back</h2>
                <p className='text-slate-500'>Welcome Back, Please Enter your details</p>
              </div>
              <Form mode={params.get('mode') as 'login' | 'create' | null} />
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default Account