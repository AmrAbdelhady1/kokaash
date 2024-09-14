import SignForm from '@/components/signform'
import SignWith from '@/components/signwith'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[50px] pb-[70px]'>

      <h1 className='text-[#FC76AA] md:text-[32px] text-[20px] md:tracking-[-1.6px] font-Gotham'>Sign in</h1>
      <h1 className='text-black/60 text-[16px] tracking-[-0.32px]'>log in with your account</h1>

      <SignForm page={"signin"} />

      <button className='w-[90%] max-w-[341px] h-[58px] bg-[#FC76AA] flex items-center justify-center rounded-[10px]
        text-white md:text-xl text-base font-semibold hover:text-[#FC76AA] hover:bg-white border-2 border-[#FC76AA] mb-[24px]
      '>Sign In</button>

      <h1 className=' md:text-xl text-base font-[350px] tracking-[-0.4px] relative cursor-pointer'>Forget your password
        <span className="h-[1px] inline-block bg-black/60 absolute left-0 -bottom-[0.5px] w-full">
          &nbsp;</span>
      </h1>

      <SignWith />

      <h1 className='tracking-[-0.4px] md:text-xl text-base text-black/60'>Want to be a member ? 
        <Link href={"/signup"} className='text-black font-[350px] underline-offset-2 underline'> Sign up</Link></h1>

    </div>
  )
}

export default SignIn