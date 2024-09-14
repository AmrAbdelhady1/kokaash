"use client";

import React, { useState } from 'react'
import { PasswordIcon } from '@/icons'


interface Props {
  page: string;
}


const SignForm = ({ page }: Props) => {

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='w-[90%] max-w-[602px] mt-[47px]'>

      {page === "signup" &&
        <div className='tracking-[-0.32px] mb-5'>

          <h1 className='text-base font-[350px] mb-2'>
            Full name
          </h1>
          <input
            type="text"
            className='w-full bg-black/5 rounded-[10px] px-[22px] text-black/60 text-[16px] h-[53px] focus:outline-none tracking-[-0.32px]'
            placeholder='Enter your full name' />

        </div>
      }

      <div className='tracking-[-0.32px] mb-5'>

        <h1 className='text-base font-[350px] mb-2'>
          Email
        </h1>
        <input
          type="text"
          className='w-full bg-black/5 rounded-[10px] px-[22px] text-black/60 text-[16px] h-[53px] focus:outline-none tracking-[-0.32px]'
          placeholder='Enter your email address' />

      </div>

      <div className='tracking-[-0.32px] mb-[47px]'>

        <h1 className='text-base font-[350px] mb-2'>
          Password
        </h1>

        <div className='flex items-center justify-between w-full bg-black/5 rounded-[10px] px-[22px] text-black/60 text-[16px] h-[53px] gap-10'>
          <input
            type={showPassword ? "text" : "password"}
            className='w-full h-full bg-transparent focus:outline-none tracking-[-0.32px]'
            placeholder='Enter your password' />
          <span className='cursor-pointer' onClick={handlePassword}>
            <PasswordIcon />
          </span>
        </div>

      </div>

    </div>
  )
}

export default SignForm