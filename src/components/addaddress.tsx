import { DropDownArrowIcon, ExitIcon } from '@/icons'
import React from 'react'

interface Props {
  close: React.MouseEventHandler<HTMLSpanElement>;
}

const AddAddress = ({ close }: Props) => {
  return (
    <div className='z-40 text-sm lg:text-base bg-black/25 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full min-h-screen'>
      <div className='rounded-[13px] w-[90%] max-w-[1046px] min-h-[681px] bg-white px-[20px] lg:px-[50px] pt-[25px] lg:pt-[66px] pb-[22px] tracking-[-0.32px]'>

        <div className='flex justify-between items-start w-full mb-[16px]'>
          <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] lg:mb-[56px] leading-[49px]'>Add Address</h1>
          <span className='cursor-pointer' onClick={close}><ExitIcon /></span>
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

        <input type="text"
          placeholder='Street'
          className='w-full h-[69px] border border-[#7F7F7F] text-[#7F7F7F] rounded-[10px] px-5
          focus:border-customPink focus:outline-none mb-[21px]'
        />

        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-[39px]'>
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

        <div className='flex flex-col lg:flex-row gap-[15px] items-center justify-between w-full'>
          <div className='flex flex-row-reverse w-full lg:flex-row items-center justify-between lg:justify-start gap-9'>

            <div className='flex items-center justify-center gap-2'>
              <span className='lg:w-[29px] w-[21px] lg:h-[29px] h-[21px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
                <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
              </span>
              <h1 className='lg:text-lg leading-5'>Apartment</h1>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <span className='lg:w-[29px] w-[21px] lg:h-[29px] h-[21px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
                <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
              </span>
              <h1 className='lg:text-lg leading-5'>Home</h1>
            </div>

          </div>

          <button className='text-lg lg:text-[25px] font-MDLZ text-white bg-[#53BDF2] flex items-center 
            justify-center w-full max-w-[341px] h-[60px] flex-shrink-0 rounded-[29px]'>
            SAVE
          </button>

        </div>
      </div>
    </div>
  )
}

export default AddAddress