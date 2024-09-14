"use client";
import Link from 'next/link'
import React from 'react'
import { EmailIcon, InstagramIcon, PhoneIcon, VisaIcon, MastercardIcon, ArrowIcon, FooterImg } from '../icons'
import { motion } from 'framer-motion';
import Image from "next/image";

interface CustomLinkProps {
  href: string;
  title: string;
}

const CustomeLink = ({ href, title }: CustomLinkProps) => {
  return (
    <h1 className='mb-1'>
      <Link href={href} className="relative group">
        {title}

        <span className="h-[1px] text-sm md:text-base inline-block bg-white w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
          &nbsp;</span>
      </Link>
    </h1>
  )
}


const Footer = () => {

  return (
    <div className='lg:pt-16 md:px-20 pt-[18px] pb-40 bg-[#53BDF2] w-full justify-between 
    flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-white text-lg relative'>

      <div className='md:px-0 px-[26px] border-b border-b-white/50 md:border-0 w-full md:w-fit'>
        <h1 className='lg:text-3xl text-lg mb-2 font-MDLZ'>LINKS</h1>

        <CustomeLink href={"/aboutus"} title={"About Kokaash"} />
        <CustomeLink href={"/delivery-policy"} title={"Delivery Policy"} />
        <CustomeLink href={"/refund-policy"} title={"Refund and Return Policy"} />
        <CustomeLink href={"/"} title={"Privacy Policy"} />
        <CustomeLink href={"/terms-of-services"} title={"Terms of services"} />
        <CustomeLink href={"/account-information"} title={"My Account"} />

      </div>

      <div className='w-full'>
        <div className='md:px-0 px-[26px] border-b border-b-white/50 md:border-0 w-full md:w-fit'>
          <h1 className='lg:text-3xl text-lg mb-2 font-MDLZ'>Get In TOUCH</h1>

          <div className='flex items-center gap-3'>
            <PhoneIcon />
            <CustomeLink href={"/"} title={"+20 100 702 6007"} />
          </div>

          <div className='flex items-center gap-3 mb-2 md:mb-8'>
            <EmailIcon />
            <CustomeLink href={"/"} title={"hi@eslamessamdesigns.com"} />
          </div>
        </div>

        <div className='md:px-0 px-[26px] border-b border-b-white/50 md:border-0 w-full md:w-fit mt-2'>
          <h1 className='lg:text-3xl text-lg mb-2 font-MDLZ'>FOLLOW US</h1>

          <div className='flex items-center gap-3 mb-2 md:mb-8'>
            <InstagramIcon />
            <CustomeLink href={"/"} title={"kokaash"} />
          </div>

        </div>
      </div>

      <div className='md:px-0 px-[26px] border-b border-b-white/50 md:border-0 w-full md:w-fit flex gap-[34px] md:gap-0 md:flex-col'>
        <h1 className='lg:text-3xl text-lg mb-2 font-MDLZ'>WE ACCPET</h1>

        <div className='flex items-center gap-3 mb-2'>
          <VisaIcon />
          <MastercardIcon />
        </div>
      </div>

      <div className='mb-10 md:px-0 px-[26px] border-b border-b-white/50 md:border-0 w-full md:w-fit'>
        <h1 className='lg:text-3xl text-lg mb-2 font-MDLZ'>JOIN OUR NEWSLETTER</h1>
        <h1>Sign up to receive the latest updates and promotions</h1>

        <div className='flex max-w-[350px] items-center justify-between bg-white rounded-[10px] h-11 pl-3 pr-2 mt-4 mb-5'>
          <input
            type='search'
            placeholder='Enter your email address'
            className='bg-transparent w-full border-none text-black/60 focus:outline-none'
          />
          <motion.button className='w-[34px] h-[34px] rounded-lg bg-[#F174A7] flex items-center justify-center'
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowIcon />
          </motion.button>
        </div>
      </div>

      <div className='absolute bottom-0 md:right-4 px-4 md:px-0'>
        <FooterImg />
      </div>
    </div>
  )
}

export default Footer