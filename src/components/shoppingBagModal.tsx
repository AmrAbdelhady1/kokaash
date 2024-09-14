"use client";
import { cartItems } from "@/app/cart/cart.service";
import { BreakLineBag, CloseIcon } from "@/icons/closeIcon";
import { DecrementIcon, IncrementIcon } from "@/icons/decrementIcon";
import Link from "next/link";
import { useEffect } from "react";
import Modal from "react-modal";

const ShoppingBagModal = ({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) => {
  useEffect(() => {}, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Modal"
      className="bg-[#FFD89F] p-4 md:p-6 rounded-lg absolute top-0 right-0 h-full max-w-[250px] md:max-w-[420px] flex flex-col"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-75"
    >
      <div className="flex justify-between">
        <p className="text-black text-center self-center font-MDLZ md:text-25 font-normal">
          SHOPPING BAG
        </p>
        <div className="cursor-pointer" onClick={onRequestClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex justify-center">
        <BreakLineBag />
      </div>
      {/* Should be replaced with item */}
      <div className="mt-[21px] overflow-auto scrollbar-width-none scrollbar_hidden">
        {cartItems.map((item, index) => (
          <div key={item.number} className="grid grid-cols-4 gap-4">
            <img
              src={item.image}
              alt="cart image"
              className="col-span-1 mr-[16px] w-[66px] h-[66px]"
            />
            <div className="col-span-3">
              <div>
                <p className="mb-[8px]">{item.order}</p>
                <p className="mb-[8px] text-xs">
                  <span className="self-center text-center text-gray-600 font-GothamLight text-xs ">
                    Size -{" "}
                  </span>
                  <span className="font-Gotham">{item.size}</span>
                </p>
                <h1 className="flex items-center">
                  <p className="self-center text-center text-gray-600 font-GothamLight text-xs font-normal">
                    Color
                  </p>
                  <p
                    className={`w-[14px] h-[14px] bg-[${item.color}] rounded-full ml-[35px] mb-[10px] border-[1px] border-white`}
                  ></p>
                </h1>
              </div>
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                <div className="flex justify-center items-center gap-[15px]">
                  <div className="cursor-pointer  mb-[10px]">
                    <DecrementIcon />
                  </div>
                  <p className="font-GothamLight self-center text-center ">
                    {item.quantity}
                  </p>

                  <div className="cursor-pointer mb-[10px]">
                    <IncrementIcon />
                  </div>
                </div>
                <div className="font-Gotham text-[12px]">{item.price} KWD</div>
              </div>
            </div>
            {index !== cartItems.length - 1 ? (
              <div className="mb-[33px]">
                <BreakLineBag />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center h-[50px] px-[19px] py-[11px] h-55 w-full rounded-[10px] bg-purple-800  mb-[10px]">
          <p className="text-white font-MDLZ md:text-25 font-normal">
            SUBTOTAL
          </p>
          <p className="text-white font-MDLZ md:text-25 font-normal">
            {" "}
            {cartItems
              .map((item) => item.price)
              .reduce((acc, count) => acc + count)}{" "}
            KWD
          </p>
        </div>
        <Link
          onClick={onRequestClose}
          href={"/billing-and-shipping"}
          className="flex w-full h-[50px] p-18/28 justify-center items-center rounded-3xl bg-blue-500 text-white font-MDLZ md:text-25 font-normal"
        >
          CHECKOUT
        </Link>
      </div>
    </Modal>
  );
};
export default ShoppingBagModal;
