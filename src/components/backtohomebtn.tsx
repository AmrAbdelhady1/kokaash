import React from 'react'
import Link from 'next/link';
import { MyOrdersArrowIcon } from '@/icons';

interface Props {
  className: string;
}

const BackToHomeBtn = ({ className }: Props) => {
  return (
    <Link href={"/"} className={`w-[90%] gap-5 max-w-[341px] h-[60px] bg-[#FC76AA] flex items-center font-MDLZ
      justify-center rounded-[29px] text-white text-lg md:text-[25px] hover:scale-105 ease-in-out duration-500
      ${className}
      `}>
      <MyOrdersArrowIcon />
      BACK TO HOME
    </Link>
  )
}

export default BackToHomeBtn