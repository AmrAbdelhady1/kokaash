import React from 'react'
import BackToHomeBtn from '@/components/backtohomebtn'

const DeliveryPolicy = () => {
  return (
    <div className='flex flex-col items-center justify-start py-[48px] px-[25px] lg:px-[142px]'>

      <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] mb-10'>Delivery Policy</h1>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>AFFORDABLE Delivery Fee</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center'>
        We curate amazing products on our website from several of our partner stores!
        Once you place an order, we collect the items from our partner stores and bring it to our fulfilment facility. From here,
        we put it all together for you with care and dispatch it.</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] mb-[32px] text-center'>
        Why pay KD 6 (or more) to shop from 3 stores, when you can get it all together at Kokaash for a flat Affordable Delivery Fee!!!
        Orders from outside of the Kuwait may incur international delivery charges and include a additional custom duty fees.
      </p>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>Cancellations</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center'>
        We cannot guarantee any cancellations or changes once your order has been completed, but we are sometimes able
        to make changes to orders that have not yet been collected from partner stores. Orders that have already collected up
        cannot be changed or cancelled.</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] mb-[32px] text-center'>
        If your order has already been collected, our customer care team will coordinate with our partner stores and
        will be happy to set up a return for you. Please note that we will not be able to accept a return for any items marked as Special Sale.
        If you want to cancel or make changes to your order, please reach out to our customer care team at customercare@kokaash.com
      </p>


      <BackToHomeBtn className='mt-[30px]' />

    </div>
  )
}

export default DeliveryPolicy