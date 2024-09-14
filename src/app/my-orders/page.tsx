import React from 'react'
import MyOrderTable from '@/components/myordertable'
import BackToHomeBtn from '@/components/backtohomebtn';
import MyOrderMobile from '@/components/myordermobile';

const MyOrders = () => {
  return (
    <div className='w-full py-11 lg:px-16 px-[24px]'>
      <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] mb-10'>My Orders</h1>
      <MyOrderTable />
      <MyOrderMobile />
      <BackToHomeBtn className='mt-[65px] mx-auto mb-[24px]' />
    </div>
  )
}

export default MyOrders