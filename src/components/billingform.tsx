import React from 'react'
import { DropDownArrowIcon } from '@/icons'

const BillingForm = () => {
  return (
    <div className='tracking-[-0.32px]'>

        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-[21px]'>
          <input type="text"
            placeholder='First Name'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
          <input type="text"
            placeholder='First Name'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
        </div>

        <div className="relative inline-block w-full h-[70px] mb-[21px]">
          <select className="block w-full h-full appearance-none bg-white border border-[#7F7F7F] text-[#7F7F7F]
           py-2 px-4 pr-8 rounded-[10px] leading-tight focus:outline-none focus:border-customPink">
            <option value="1">Country / Region</option>
            <option value="2">amr</option>
            <option value="3">amr</option>
            <option value="4">amr</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <DropDownArrowIcon />
          </div>
        </div>

        <div className="relative inline-block w-full h-[70px] mb-[21px]">
          <select className="block w-full h-full appearance-none bg-white border border-[#7F7F7F] text-[#7F7F7F]
           py-2 px-4 pr-8 rounded-[10px] leading-tight focus:outline-none focus:border-customPink">
            <option value="1">city</option>
            <option value="2">amr</option>
            <option value="3">amr</option>
            <option value="4">amr</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <DropDownArrowIcon />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-[21px]'>
          <input type="text"
            placeholder='Area'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
          <input type="text"
            placeholder='Block'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-[21px]'>
          <input type="text"
            placeholder='Avenue'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
          <input type="text"
            placeholder='Home'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
            focus:border-customPink focus:outline-none'
          />
        </div>

        <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 mb-4'>
          <div className='flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:justify-start gap-9 w-full'>

            <div className='flex items-center justify-center gap-2'>
              <span className='md:w-[29px] w-[24px] md:h-[29px] h-[24px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
                <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
              </span>
              <h1 className='lg:text-lg leading-5'>Apartment</h1>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <span className='md:w-[29px] w-[24px] md:h-[29px] h-[24px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
                <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
              </span>
              <h1 className='lg:text-lg leading-5'>Home</h1>
            </div>

          </div>

          <input type="text"
            placeholder='Mobile Number'
            className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5 
            focus:border-customPink focus:outline-none'
          />

        </div>

        <h1 className='text-[#FC76AA] text-[20px] font-bold tracking-[-1px] leading-[49px] mb-4'>Additional Information</h1>

        <textarea className='p-5 w-full h-[133px] rounded-[10px] border border-[#7F7F7F] focus:outline-none 
        focus:border-customPink text-[#7F7F7F] resize-none'
          placeholder='Order notes'
        ></textarea>

    </div>
  )
}

export default BillingForm