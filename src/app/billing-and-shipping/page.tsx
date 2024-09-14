import React from 'react'
import BillingForm from '@/components/billingform'
import OrderForm from '@/components/orderform'
import Link from 'next/link'

const BillingAndShipping = () => {
  return (
    <div className='w-full pt-11 pb-2 md:px-16 px-[25px]'>

      <div className='hidden lg:grid grid-cols-3 w-full mb-12 text-[#FC76AA] text-[32px] font-Gotham tracking-[-1.6px] gap-8'>
        <h1 className='col-span-2'>Billing & Shipping</h1>
        <h1>Your order</h1>
      </div>

      <div className='lg:grid lg:grid-cols-3 flex flex-col-reverse w-full gap-8'>
        <div className='lg:col-span-2'>
          <h1 className="text-[#FC76AA] text-[20px] md:text-[32px] md:tracking-[-1.6px] font-Gotham mb-3 lg:hidden">
            Billing & Shipping
          </h1>
          <BillingForm />
        </div>
        <div>
          <h1 className="text-[#FC76AA] text-[20px] md:text-[32px] md:tracking-[-1.6px] font-Gotham mb-3 lg:hidden">
            Your order
          </h1>
          <OrderForm />
        </div>
      </div>

      <Link href={"/cart/order-placed"} className='items-center justify-center max-w-[341px] w-[90%] h-[60px] my-[20px] mx-auto rounded-[29px]
      bg-[#53BDF2] text-white font-MDLZ text-[18px] uppercase lg:hidden flex'>
        Place order
      </Link>

    </div>
  )
}

export default BillingAndShipping