import React from 'react'
import Link from 'next/link'
import AccountInfoForm from '@/components/accountinfoform'
import BackToHomeBtn from '@/components/backtohomebtn'

const AccountInfo = () => {
  return (
    <div className='w-full py-11 md:px-16 px-[25px] relative'>

      <h1 className='text-[#FC76AA] text-[20px] md:text-[32px] font-Gotham md:tracking-[-1.6px] mb-[56px] leading-[49px]'>Account Information</h1>

      <AccountInfoForm />

      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-[22px] uppercase text-white font-MDLZ 
      text-lg md:text-[25px] mt-[90px] lg:mb-[90px]'>
        <BackToHomeBtn className={""} />
        <Link href={"/my-orders"} className='w-[90%] max-w-[341px] h-[60px] bg-[#66457E] flex items-center 
          justify-center rounded-[29px]  hover:scale-105 ease-in-out duration-500'>
          MY ORDERS
        </Link>
        <Link href={"/"} className='w-[90%] max-w-[341px] h-[60px] bg-[#53BDF2] flex items-center 
          justify-center rounded-[29px] hover:scale-105 ease-in-out duration-500'>
          Save
        </Link>
      </div>

    </div>
  )
}

export default AccountInfo