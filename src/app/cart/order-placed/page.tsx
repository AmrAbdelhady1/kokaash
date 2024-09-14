import {
  BoyAndGirlSVG,
  OrderBgSVG,
  RightMarkSVG,
} from "@/icons/orderPlacedIcons";
import Link from "../../../../node_modules/next/link";
import { BoyAndGirlMobileIcon, OrderRightMobileIcon } from "@/icons";

const OrderPlaced = () => {
  const onSeeOrderDetails = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[45px] mb-[19px] hidden md:block">
        <RightMarkSVG />
      </div>
      <div className="hidden md:block">
        <BoyAndGirlSVG />
      </div>
      <div className="mt-[45px] mb-[19px] md:hidden">
        <OrderRightMobileIcon />
      </div>
      <div className="md:hidden">
        <BoyAndGirlMobileIcon />
      </div>
      <div className="w-[250px] text-center text-[24px] md:text-[40px] font-normal text-customPink font-MDLZ mb-[15px]  z-10">
        Order Placed Successfully
      </div>
      <p className="text-gray-400 text-center font-Gotham text-[14px] md:text-[16px] font-normal leading-5 capitalize  z-10">
        You will recieve an email confirmation
      </p>

      <div className="flex justify-center items-center mt-[20px] mb-[142px]">
        <Link
          href="/my-orders"
          className="flex justify-center items-center w-[340px] h-[60px] bg-cyanButtons rounded-full text-white font-MDLZ text-[18px] md:text-[25px] font-normal p-0 cursor-pointer z-10  hover:scale-105 ease-in-out duration-500"
        >
          <p>SEE ORDER DETAILS</p>
        </Link>
      </div>
      <div className="absolute top-[78%] hidden md:block">
        <OrderBgSVG />
      </div>
    </div>
  );
};
export default OrderPlaced;
