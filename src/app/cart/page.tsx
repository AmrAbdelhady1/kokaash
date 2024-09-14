import { PercentageIcon, SubmitIcon } from "@/icons/couponIcons";
import {
  DecrementIcon,
  DeleteIcon,
  IncrementIcon,
} from "@/icons/decrementIcon";
import { LineBreakerIcon, LineBreakerIconV2 } from "@/icons/LineBreakerIcon";
import Link from "../../../node_modules/next/link";
import { cartItems } from "./cart.service";
import CartMoblie from "@/components/cartmobile";

const Cart = () => {
  const colItemStyle = "text-black text-center font-MDLZ text-20 font-normal";
  return (
    <div className="w-full py-[10px] lg:py-11 px-[25px] lg:px-16">
      <h1 className="text-[#FC76AA] text-xl lg:text-[32px] font-Gotham tracking-[-1.6px] mb-10">
        Cart
      </h1>
      <CartMoblie />
      <div className="hidden md:block">
        <div className="p-5 grid grid-cols-7 items-center justify-center text-xl uppercase text-center">
          <p className={colItemStyle}>Item</p>
          <p className={colItemStyle}>Number</p>
          <p className={colItemStyle}>Order</p>
          <p className={colItemStyle}>size</p>
          <p className={colItemStyle}>color</p>
          <p className={colItemStyle}>quantity</p>
          <p className={colItemStyle}>price</p>
        </div>
      </div>
      <div className=" justify-center hidden md:flex">
        <LineBreakerIcon />
      </div>
      <div className="hidden md:block">
        {cartItems.map((item: any, index) => (
          <div
            key={index}
            className="grid grid-cols-7 items-center justify-center p-5 text-[15px] leading-5 capitalize text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-["66px] h-[66px] rounded-lg mx-auto'
            />
            <p>{item.number}</p>
            <p>{item.order}</p>
            <p>{item.size}</p>

            <p
              className={`w-[23px] h-[23px] bg-[${item.color}] rounded-full mx-auto`}
            ></p>

            <div className="flex justify-center gap-[8px]">
              <div className="cursor-pointer">
                <DecrementIcon />
              </div>
              <p>{item.quantity}</p>

              <div className="cursor-pointer">
                <IncrementIcon />
              </div>
              <div className="cursor-pointer">
                <DeleteIcon />
              </div>
            </div>
            <p>{item.price} KWD</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-5 lg:mb-[34px]">
        <LineBreakerIconV2 />
      </div>
      <div className="flex justify-between items-center lg:ml-[173px] lg:mr-[192px] mb-[26px]">
        <h1 className="text-gray-400 font-MDLZ lg:text-[24px] font-normal leading-5.25 capitalize">
          Subtotal
        </h1>
        <h1 className="text-gray-700 font-MDLZ lg:text-24 font-normal leading-5.25 capitalize">
          {cartItems.map((i) => i.price).reduce((acc, count) => acc + count) +
            " KWD"}
        </h1>
      </div>
      {/* INPUT COPOUN */}
      <div className="flex lg:w-[50%] h-[56px] items-center justify-center py-2 lg:ml-[173px] lg:mr-[192px] mb-[17px] bg-gray-200 rounded-lg pr-[16px] pl-[16px]">
        <div className="flex justify-center items-center w-[21px] h-[20px] lg:w-[40px] lg:h-[35px] mx-auto rounded-full bg-customPink overflow-hidden">
          <PercentageIcon />
        </div>
        <input
          placeholder="Enter Coupon Code"
          className="appearance-none text-xs lg:text-base bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400"
        ></input>
        <SubmitIcon />
      </div>
      <div className="border rounded-lg lg:h-[154px]  lg:ml-[173px] lg:mr-[192px] bg-customPink px-3 py-4 lg:pt-[21px] lg:pl-[32px] lg:pr-[32px] mb-[46px]">
        <p className="text-white font-Gotham text-xs lg:text-base font-bold mb-[18px]">
          Do you have any additional information?
        </p>
        <input
          className="appearance-none text-xs lg:text-base placeholder-white block w-full bg-customPink border border-transparent lg:border-gray-200 rounded py-3 lg:px-4 mb-3 leading-tight focus:outline-none lg:focus:bg-customPink lg:focus:border-gray-500"
          id="grid-note"
          type="text"
          placeholder="Type your note here."
        ></input>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/cart/order-placed"
          className="flex justify-center items-center w-[90%] max-w-[341px] mb-10 h-[60px] bg-cyanButtons rounded-full text-white font-MDLZ lg:text-[25px] font-normal p-0 cursor-pointer  hover:scale-105 ease-in-out duration-500"
        >
          <p>CHECKOUT</p>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
