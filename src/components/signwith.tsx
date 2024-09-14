import { AppleIcon, FacebookIcon, GmailIcon } from '@/icons'
import React from 'react'

const SignWith = () => {
  return (
    <div className='w-[90%] max-w-[341px] mx-auto my-[28px]'>

      <div className='flex items-center justify-between mb-[26px] gap-2'>
        <span className="h-[1px] bg-black/20 w-full"></span>
        <span className='text-black/60 tracking-[-0.16px]'>Or</span>
        <span className="h-[1px] bg-black/20 w-full"></span>
      </div>

      <button className='w-full h-[59px] gap-4 flex items-center justify-center rounded-[10px]
         font-bold tracking-[-0.32px] border border-black/30
      '>
        <GmailIcon />
        Sign in with Google</button>

      <button className='w-full bg-[#1877F2] text-white h-[59px] gap-4 flex items-center justify-center rounded-[10px]
         font-bold tracking-[-0.32px] border border-[#1877F2] my-4
      '>
        <FacebookIcon />
        Sign in with Facebook</button>

      <button className='w-full bg-black text-white h-[59px] gap-4 flex items-center justify-center rounded-[10px]
         font-bold tracking-[-0.32px] border border-black
      '>
        <AppleIcon />
        Sign in with Apple</button>

    </div>
  )
}

export default SignWith