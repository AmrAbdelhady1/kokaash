"use client";

import React, { useState } from 'react'
import { AccountInfoImg, PaymentMethodIcon } from '@/icons'
import { EditIcon } from '@/icons/editicon'
import AddAddress from './addaddress'
import AddPaymentCard from './addpaymentcard';

const AccountInfoForm = () => {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row items-start justify-between w-full gap-[50px] lg:gap-[140px]'>

      <div className='font-semibold tracking-[-0.32px] w-full'>

        <p>Full name</p>

        <div className='flex justify-between items-center w-full max-w-[863px] mt-2 mb-7 gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <input type="text"
            className='font-normal w-full bg-transparent focus:outline-none'
            value={"Eslam Essam Muhammed ElSayed"} />
          <EditIcon />
        </div>

        <p>Email Address</p>

        <div className='flex justify-between items-center w-full max-w-[863px] mt-2 mb-7 gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <input type="text"
            className='font-normal w-full bg-transparent focus:outline-none'
            value={"eslamessam19951@gmail.com"} />
          <EditIcon />
        </div>

        <p>Shipping Address</p>

        <div className='flex justify-between h-[87px] items-center w-full max-w-[863px] mt-2 mb-7 gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <input type="text"
            className='font-normal w-full bg-transparent focus:outline-none'
            value={"51 Abd El Rahman Rafiee St. Nozha Cairo, Egypt"} />
          <span className='cursor-pointer' onClick={() => setOpen(true)}><EditIcon /></span>
        </div>

        <p>Phone Number</p>

        <div className='flex justify-between items-center w-full max-w-[863px] mt-2 mb-7 gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <input type="text"
            className='font-normal w-full bg-transparent focus:outline-none'
            value={"+20 100 702 6007"} />
          <EditIcon />
        </div>

        <p>Payment Method</p>

        <div className='flex justify-between items-center w-full max-w-[863px] mt-2 mb-4 gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <div className='flex items-center gap-3 font-normal'>
            {/* <input type="text"
              className='font-normal bg-transparent focus:outline-none'
              value={"**** 9387"} /> */}
            <p>**** 4187</p>
            <PaymentMethodIcon />
          </div>
          <span className='cursor-pointer' onClick={() => setOpen2(true)}><EditIcon /></span>
        </div>

        <div className='flex justify-between items-center w-full max-w-[863px] gap-5 rounded-[10px] bg-[#EDEDED] py-4 px-8'>
          <div className='flex items-center gap-3 font-normal'>
            {/* <input type="text"
              className='font-normal bg-transparent focus:outline-none'
              value={"**** 9387"} /> */}
            <p>**** 9387</p>
            <PaymentMethodIcon />
          </div>
          <EditIcon />
        </div>

      </div>

      <div className='lg:mr-[97px] lg:mt-3 mx-auto'>
        <AccountInfoImg />
      </div>

      {open && <AddAddress close={() => setOpen(false)} />}
      {open2 && <AddPaymentCard close={() => setOpen2(false)} />}

    </div>
  )
}

export default AccountInfoForm