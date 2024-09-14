import React from 'react'
import { ExitIcon } from '@/icons'

interface Props {
  close: React.MouseEventHandler<HTMLSpanElement>;
}

const AddPaymentCard = ({ close }: Props) => {
  return (
    <div className='z-40 bg-black/25 text-sm lg:text-base fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full min-h-screen'>
      <div className='rounded-[13px] w-[90%] max-w-[1046px] min-h-[499px] bg-white px-[20px] lg:px-[50px] pt-[25px] lg:pt-[46px] pb-[22px] tracking-[-0.32px]'>

        <div className='flex justify-between items-start w-full'>
          <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] mb-[30px] lg:mb-[56px] leading-[49px]'>Add Card</h1>
          <span className='cursor-pointer' onClick={close}><ExitIcon /></span>
        </div>

        <input type="text"
          placeholder='Card Number'
          className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
          focus:border-customPink focus:outline-none mb-[21px]'
        />

        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-[21px]'>
          <input type="text"
            placeholder='Name on card'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
          <input type="text"
            placeholder='Exp Date'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
        </div>

        <input type="text"
          placeholder='CVV'
          className='lg:w-[49%] w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
          focus:border-customPink focus:outline-none mb-[39px]'
        />

        <div className='flex justify-end mb-9'>
          <button className='text-lg lg:text-[25px] font-MDLZ text-white bg-[#53BDF2] flex items-center 
            justify-center w-full max-w-[341px] h-[60px] flex-shrink-0 rounded-[29px]'>
            SAVE
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPaymentCard