"use client";

import React, { useEffect, useState } from "react";
import Highlight from "./highlight";
import Link from "next/link";
import {
  CartIcon,
  KokaashIcon,
  SearchIcon,
  SignArrowIcon,
  SignIcon,
  WishlistIcon,
} from "../icons";
import Menubar from "./Menubar/Menubar";
import { HamIcon } from "@/icons/hamIcon";
import { CloseIcon, CloseIconSmall } from "@/icons/closeIcon";
import { menuItems, menuItemsV2 } from "./Menubar/menuBar.services";
import { RightArrowIcon } from "@/icons/signarrowicon";
import { title } from "process";

const Navbar = () => {
  const [openSignMenu, setOpenSignMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [currentItems, setCurrentItems] = useState<any>({
    header: "MAIN MENU",
    parent: "",
    items: menuItemsV2[0].items,
  });

  const handleMouseEnter = () => {
    setOpenSignMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenSignMenu(false);
  };
  const onHamClick = () => {
    setOpenMenu(!openMenu);
  };
  const updateScreenWidth = () => {
    if (typeof window !== "undefined") {
      setScreenWidth(window?.innerWidth);
      if (window?.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateScreenWidth();
      window?.addEventListener("resize", updateScreenWidth);

      return () => {
        window?.removeEventListener("resize", updateScreenWidth);
      };
    }
  }, []);

  const onItemClick = (title: string) => {
    const item = menuItemsV2.find(
      (i) => i.title === title && i.parent === currentItems.header
    );
    if (item?.items.length === 0) {
      return;
    }
    if (item) {
      setCurrentItems({
        header: item?.title,
        parent: item?.parent,
        items: item?.items,
      });
    }
  };
  const onMenuClose = () => {
    if (currentItems.parent.length === 0) {
      setOpenMenu(false);
      return;
    } else {
      const item = menuItemsV2.find((i) => i.title === currentItems.parent);
      setCurrentItems({
        header: item?.title,
        parent: item?.parent,
        items: item?.items,
      });
      return;
    }
  };
  return (
    <div>
      <Highlight />

      <nav
        className={
          `flex flex-col justify-between items-center w-full  bg-white text-lg my-[23px] lg:pb-[23px] ` +
          (!isMobile
            ? "px-[70px] border-b-[#D9D9D9] border-b-[1px]"
            : "px-[25px]")
        }
      >
        <div className="flex justify-between items-center w-full">
          <Link href={"/"} className="sm:w-[143px] lg:w-[242px]">
            <KokaashIcon />
          </Link>

          {!isMobile ? (
            <div className="relative w-[30%] max-w-[552px] rounded-2xl gap-3 h-14 bg-[#EDEDED] flex items-center px-5">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search Anything"
                className="bg-transparent w-full border-none text-black focus:outline-none"
              />

              {/* <div className='absolute flex flex-col p-6 items-start gap-[6px] bg-[#EDEDED] rounded-b-2xl w-full right-0 left-0 top-[100%] text-[15px] font-normal z-[100]'>
            <h1>Sign Up</h1>
            <h1>Sign In</h1>
          </div> */}
            </div>
          ) : null}

          <div className="flex items-center justify-center gap-4">
            <div
              className="relative flex items-center gap-4 w-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center lg:gap-2 sm:gap-1 w-full">
                <SignIcon />
                {!isMobile ? (
                  <div className="flex items-center">
                    <p className="text-[#666666] self-center font-GothamLight">
                      Sign Up/Sign In
                    </p>
                  </div>
                ) : null}
                <SignArrowIcon />
              </div>

              {openSignMenu && (
                <div className="absolute flex flex-col p-[6px] items-start gap-[6px] bg-white w-full top-[100%] text-[15px] font-normal z-[100] sm:w-[114px]">
                  <Link href={"/signup"} className="hover:text-slate-700">
                    Sign Up
                  </Link>
                  <Link href={"/signin"} className="hover:text-slate-700">
                    Sign In
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={"/wishlist"}
              className="flex items-center gap-2 px-3 border-l-[1px] border-r-[1px] border-[#D9D9D9]"
            >
              <WishlistIcon />
              {!isMobile ? (
                <h1 className="text-[#666666] hover:text-slate-700">
                  Wishlist
                </h1>
              ) : null}
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-2 cursor-pointer"
            >
              <p>
                <CartIcon />
              </p>
              {!isMobile ? <p className="text-[#666666]">Cart</p> : null}
            </Link>
          </div>
        </div>

        {isMobile ? (
          <div className="flex justify-center gap-[15px]">
            <div className=" relative  max-w-[552px]  rounded-2xl gap-3 h-[42px] bg-[#EDEDED] flex items-center px-5">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search Anything"
                className="bg-transparent w-full border-none text-black focus:outline-none"
              />
            </div>
            <div
              className=" px-[10px] py-[10px] bg-[#53BDF2] rounded-md"
              onClick={onHamClick}
            >
              <HamIcon />
            </div>
          </div>
        ) : null}
      </nav>
      {!isMobile ? <Menubar /> : null}
      {isMobile && openMenu ? (
        <div className="absolute top-0 w-[70%] bg-[#fff] p-[15px] shadow-md shadow-md-right-bottom">
          <div className="flex justify-between">
            <h1
              className={
                `text-bold font-Gotham self-center ` +
                (currentItems.header.includes("Girl")
                  ? "text-[#F174A7]"
                  : currentItems.header.includes("Boy")
                  ? "text-[#53BDF2]"
                  : ["Months", "Baby Essentials"].includes(currentItems.header)
                  ? "text-[#66457E]"
                  : "")
              }
            >
              {currentItems.header}
            </h1>
            <div onClick={onMenuClose}>
              <CloseIconSmall />
            </div>
          </div>
          <div>
            {currentItems.items.map((item: any, index: any) => (
              <div
                className="flex justify-between mt-[17px]"
                key={index}
                onClick={() => onItemClick(item.title || item)}
              >
                <p className="text-gray-600 font-Gotham font-bold text-lg leading-5 capitalize">
                  {item.title || item}
                </p>
                <RightArrowIcon />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
