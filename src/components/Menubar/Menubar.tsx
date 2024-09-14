"use client";

import { useEffect, useState } from "react";
import { menuItems } from "./menuBar.services";
import {
  StyledItemTitle,
  StyledMenuBar,
  StyledMenuItem,
  StyledMenuList,
  StyledStoreItem,
  StyledSubItems,
} from "./menuBar.styled";

export default function Menubar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState<
    { title: any; subCategories: any } | undefined
  >();

  const handleMouseEnter = (index: any, title: string) => {
    setActiveIndex(index);
    const item = menuItems.filter((item) => item.title === title)[0];
    setActiveCategory((item as any) || undefined);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setActiveCategory(undefined);
  };

  return (
    <StyledMenuBar className="bg-white-800 p-4" onMouseLeave={handleMouseLeave}>
      <StyledMenuList className="flex  justify-center items-center gap-[9.65%]">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative group hover:text-slate-700 text-gray-600 font-Gotham text-2xl font-700 capitalize "
            onMouseEnter={() => handleMouseEnter(index, item.title)}
          >
            <a
              href="#"
              className={activeIndex === index ? "text-slate-700" : ""}
            >
              {item.title}
            </a>
          </li>
        ))}
      </StyledMenuList>
      {activeIndex &&
      activeCategory &&
      (activeCategory?.subCategories?.length > 0 ||
        typeof activeCategory?.subCategories === "object") ? (
        <StyledSubItems className="absolute bg-gray-800  right-0 left-0 w-full p-4  opacity-100">
          {/* Subcategories */}
          {["KIDS", "BABY"].includes(activeCategory.title) ? (
            <>
              <div className="grid grid-cols-6 gap-80px">
                {Object.keys(activeCategory.subCategories).map((key) => {
                  const title = activeCategory.subCategories[key].title;
                  return (
                    <StyledItemTitle
                      color={
                        title?.includes("Boys")
                          ? "#53BDF2"
                          : title?.includes("Girl")
                          ? "#F174A7"
                          : "#66457E"
                      }
                      className="flex"
                    >
                      {title}
                    </StyledItemTitle>
                  );
                })}
              </div>
              <div className="grid grid-cols-6 gap-80px">
                {Object.keys(activeCategory.subCategories).map((key) => {
                  const items = activeCategory.subCategories[key].items;
                  return (
                    <div className="flex flex-col relative group">
                      {items?.map((item: string) => (
                        <div className="mt-2 cursor-pointer  hover:text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-5">
              {activeCategory.subCategories.map((item: any, index: any) => (
                <StyledStoreItem
                  key={index}
                  href="#"
                  className="block text-grey-800 mb-2  hover:text-slate-700"
                >
                  {item}
                </StyledStoreItem>
              ))}
            </div>
          )}
        </StyledSubItems>
      ) : null}
    </StyledMenuBar>
  );
}
