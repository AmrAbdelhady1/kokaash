import React from 'react'
import orderImg1 from '../../public/images/order1.png'
import orderImg2 from '../../public/images/order2.png'
import Image from 'next/image';
import { ApplePayIcon, MastercardIcon, VisaIcon } from '@/icons';
import Link from 'next/link';

const OrderForm = () => {

  const products = [
    {
      id: 1,
      productName: "Hodiee Girl",
      size: "24-36 month",
      color: "#66457E",
      image: orderImg1,
      price: 130,
    },
    {
      id: 2,
      productName: "T-shirt Boy",
      size: "24-36 month",
      color: "#FFF",
      image: orderImg2,
      price: 120,
    },
  ];

  return (
    <div className='w-full lg:max-w-[436px] h-fit bg-[#EDEDED] rounded-lg flex-shrink-0 p-[26px]'>

      <div className='flex items-center justify-between w-full border-b border-b-black uppercase md:text-lg font-MDLZ pb-[10px] mb-[18px]'>
        <h1>Product</h1>
        <h1 className='text-[#7F7F7F]'>Subtotal</h1>
      </div>

      {products.map(product =>
        <div key={product.id} className='flex items-center justify-between w-full mb-[9px]'>

          <div className='flex gap-3 items-start'>

            <Image src={product.image} alt='product image'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />

            <div className='flex flex-col gap-1'>
              <h1 className='capitalize leading-5'>{product.productName}</h1>
              <p className='text-[#7F7F7F] text-xs'>Size - <span className='font-bold text-black'>{product.size}</span></p>
              <div className='flex items-center gap-9'>
                <p className='text-[#7F7F7F] text-xs'>Color</p>
                <p className={`w-[14px] h-[14px] rounded-full bg-[${product.color}] 
                ${product.color === "#FFF" ? "border border-black" : ""}`}></p>
              </div>
            </div>

          </div>

          <p className='text-[#53BDF2] font-bold text-xs'>{product.price} KWD</p>
        </div>
      )}

      <div className='flex items-center justify-between w-full uppercase lg:text-lg font-MDLZ mb-[24px] mt-[9px]'>
        <h1>SUBTOTAL</h1>
        <h1 className='font-Gotham text-xs'>250 KWD</h1>
      </div>

      <div className='flex items-center justify-between w-full uppercase lg:text-lg font-MDLZ mb-[26px]'>
        <h1>SHIPPING</h1>
        <h1 className='font-Gotham text-xs'>30 KWD</h1>
      </div>

      <button className='flex items-center justify-between w-full h-[55px] bg-[#66457E] rounded-[10px] px-[19px]
      text-white font-MDLZ text-lg mb-[32px]'>
        <span>TOTAL</span>
        <span>280 KWD</span>
      </button>

      <div className='flex items-center justify-start gap-2'>
        <span className='md:w-[29px] w-[24px] md:h-[29px] h-[24px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
          <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
        </span>
        <h1 className='text-sm md:text-lg leading-5 capitalize'>Cash on delivery</h1>
      </div>

      <div className='flex justify-between w-full items-center my-[15px]'>

        <div className='flex items-center justify-start gap-2'>
          <span className='md:w-[29px] w-[24px] md:h-[29px] h-[24px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
            <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
          </span>
          <h1 className='text-sm md:text-lg leading-5 capitalize'>Visa / Mastercard</h1>
        </div>

        <div className='flex items-center gap-[14px]'>
          <VisaIcon />
          <MastercardIcon />
        </div>

      </div>

      <div className='flex justify-between w-full items-center mb-[37px]'>

        <div className='flex items-center justify-start gap-2'>
          <span className='md:w-[29px] w-[24px] md:h-[29px] h-[24px] bg-[#FFD89F] rounded-full p-[5px] flex items-center justify-center'>
            <p className='w-full h-full rounded-full bg-[#53BDF2]'></p>
          </span>
          <h1 className='text-sm md:text-lg leading-5 capitalize'>Apple Pay</h1>
        </div>

        <div className='flex items-center gap-[14px]'>
          <ApplePayIcon />
        </div>

      </div>

      <Link href={"/cart/order-placed"} className='items-center justify-center max-w-[341px] w-[90%] h-[60px] mx-auto rounded-[29px]
      bg-[#53BDF2] text-white font-MDLZ text-[25px] uppercase hidden lg:flex'>
        Place order
      </Link>

    </div>
  )
}

export default OrderForm