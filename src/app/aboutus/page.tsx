import BackToHomeBtn from '@/components/backtohomebtn'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col items-center justify-start py-[48px] px-[25px] lg:px-[142px]'>

      <h1 className='text-[#FC76AA] lg:text-[32px] text-[20px] font-Gotham lg:tracking-[-1.6px] mb-10'>About Us</h1>

      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%] mb-[21px]'>
        <span className='text-[#53BDF2]'>“Kokaash”</span> offers a seamless delivery experience of high-quality supplies helping parents save time, energy,
        money, and ultimately make their lives easier. Convenience We believe that shopping for young ones should be
        a hassle-free experience, and so we offer convenient delivery options of various supplies making the shopping experience
        easy and reliable.</p>

      <p className='text-[#7F7F7F] lg:text-[32px] text-[16px] font-Gotham tracking-[-0.64px] leading-[123.7%] mb-[28px]'>
        <span className='text-[#53BDF2]'>“Kokaash”</span> aims to provide parents with a stress-free, convenient and reliable way to shop for
        their young ones.From a child to a teenager, we cover everything that your child might need.</p>


      <BackToHomeBtn className='mt-[30px]' />

    </div>
  )
}

export default AboutUs