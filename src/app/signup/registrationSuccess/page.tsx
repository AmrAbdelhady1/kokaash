import BackToHomeBtn from "@/components/backtohomebtn";
import { MyOrdersArrowIcon } from "@/icons/myordersarrowicon";
import {
  BoyAndGirlSVG,
  OrderBgSVG,
  RightMarkSVG,
} from "@/icons/orderPlacedIcons";
import { RegistrationRightIcon } from "@/icons/registrationSuccessIcons";
import Link from "../../../../node_modules/next/link";
import { BoyAndGirlMobileIcon, RightMobileIcon } from "@/icons";

const RegistrationSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[45px] mb-[19px] hidden md:block">
        <RegistrationRightIcon />
      </div>
      <div className="hidden md:block">
        <BoyAndGirlSVG />
      </div>
      <div className="mt-[45px] mb-[19px] md:hidden">
        <RightMobileIcon />
      </div>
      <div className="md:hidden">
        <BoyAndGirlMobileIcon />
      </div>
      <div className="w-[350px] text-center text-[24px] md:text-[40px] font-normal text-customPink font-MDLZ mb-[15px]  z-10">
        THANKS FOR YOUR REGISTRATION
      </div>
      <p className="text-gray-400 text-center font-Gotham text-[14px] md:text-[16px] font-normal leading-5 capitalize  z-10">
        You will recieve an email confirmation
      </p>

      <div className="flex justify-center items-center mt-[20px] mb-[142px] w-full">
        <BackToHomeBtn className=" mx-auto " />
      </div>
      <div className="absolute top-[78%] hidden md:block">
        <OrderBgSVG />
      </div>
    </div>
  );
};
export default RegistrationSuccess;
