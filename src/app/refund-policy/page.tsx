import React from 'react'
import BackToHomeBtn from '@/components/backtohomebtn'

const RefundPolicy = () => {
  return (
    <div className='flex flex-col items-center justify-start py-[48px] px-[25px] lg:px-[142px]'>

      <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] mb-10'>Refund Policy</h1>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>14 DAYS Return Policy</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center mb-[32px]'>
        We have a 14-day return policy, which means you have 14 days after receiving your item to request a return.To be eligible for a return, your item must be;
        In the same condition that you received it,
        Not worn and not used;
        With tags and in its original packaging.

        To return your items, please use this link - http://account.kokaash.com/You can always contact us for any return question at customercare@kokaash.com.</p>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>Damages and issues</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center mb-[32px]'>
        Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
      </p>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>Exceptions / non-returnable items</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center mb-[32px]'>
        Special items are not eligible for return. Special items generally applies to;
        Discounted products/ Items on sale.
        E-Gift cards
        Items received from following partners are custom-made for you
        Tinies.kw
      </p>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>Exchanges</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center mb-[32px]'>
        The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
      </p>

      <p className='text-[#53BDF2] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%]'>Refunds</p>
      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] tracking-[-0.4px] leading-[123.7%] text-center mb-[32px]'>

        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved,
        you’ll be automatically refunded on your original payment method. Please note that the delivery fee will be deducted from the refunded amount.
        Also, please remember it can take some time for your bank or credit card company to process and post the refund too.
      </p>


      <BackToHomeBtn className='mt-[30px]' />

    </div>
  )
}

export default RefundPolicy