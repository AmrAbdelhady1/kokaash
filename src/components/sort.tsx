"use client";

import React, { useState } from 'react'
import { WishlistArrowIcon } from '@/icons'

const Sort = () => {

  const [showSortList, setShowSortList] = useState(false);

  const handleMouseEnter = () => {
    setShowSortList(true);
  }

  const handleMouseLeave = () => {
    setShowSortList(false);
  };

  return (
    <div className='relative flex items-center gap-16 lg:gap-24 px-2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1 className='text-xs md:text-lg'>Sort</h1>
      <WishlistArrowIcon />

      {showSortList &&
        <div className='absolute flex flex-col gap-3 bg-white p-2 leading-5 w-full right-0 left-0 top-[100%] z-10 cursor-pointer text-xs md:text-base'>
          <p className='hover:text-slate-700'>Best Selling</p>
          <p className='hover:text-slate-700'>Alphabetically A-Z</p>
          <p className='hover:text-slate-700'>Alphabetically Z-A</p>
          <p className='hover:text-slate-700'>Price Low to High</p>
          <p className='hover:text-slate-700'>Price High to low</p>
          <p className='hover:text-slate-700'>Date, Old to new</p>
          <p className='hover:text-slate-700'>Date, New to old</p>
        </div>
      }
    </div>
  )
}

export default Sort