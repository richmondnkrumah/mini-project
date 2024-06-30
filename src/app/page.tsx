import Link from 'next/link'
import React from 'react'

type Props = {}

const Index = (props: Props) => {
  return (
    <main>Index
      <div className='h-50 w-fit px-10 bg-slate-400 text-center'>
        
      <Link href={"/account"} >Account Page</Link>
      </div>
      <div className='h-50 w-fit px-10 bg-slate-400 text-center'>

      <Link href={"/home"} >Home Page</Link>
      </div>
    </main>
  )
}

export default Index