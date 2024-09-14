"use client";

import { ProductCartIcon, ProductWishListIcon } from "@/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShoppingBagModal from "./shoppingBagModal";

interface Props {
  id: number;
  productName: string;
  description: string;
  image: string | StaticImageData;
  price: number;
  isSale?: boolean;
  discountPrice?: number;
}

const ProductCard = ({
  id,
  productName,
  description,
  image,
  price,
  isSale,
  discountPrice,
}: Props) => {
  const [wishlistColor, setWishlistColor] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addToWishtlist = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    setWishlistColor(!wishlistColor);
  };
  const addToCart = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <Link
        href={"/product"}
        key={id}
        className="relative flex flex-col md:mx-0 mx-auto justify-center items-start bg-white gap-5 max-w-[240px] font-MDLZ"
      >
        <Image
          src={image}
          alt="product image"
          className="w-full h-full max-h-[360px] min-h-[214px]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />

        <div>
          <h1 className="text-[#2D2D2D] lg:text-lg uppercase">{productName}</h1>
          <p className="text-[#737373] capitalize leading-5 font-GothamLight">
            {description}
          </p>
        </div>

        <div className="flex items-center lg:text-lg justify-start gap-4">
          <p className="text-[#DB6B97]">{price}</p>
          {isSale && (
            <p className="text-[#7F7F7F]">
              <del>{discountPrice}</del>
            </p>
          )}
        </div>

        <button
          className="bg-[#53BDF2] flex items-center justify-center rounded-lg text-white gap-4
       w-full h-10 uppercase"
          onClick={addToCart}
        >
          Add to cart
          <ProductCartIcon />
        </button>

        <div className="flex items-center justify-between px-2 lg:px-6 absolute top-6 w-full">
          {isSale ? (
            <p className="text-[#FFD89F] rounded-3xl bg-[#66457E] w-[71.5px] h-[24.461px] flex items-center justify-center">
              SALE
            </p>
          ) : (
            <p></p>
          )}
          <span onClick={addToWishtlist}>
            <ProductWishListIcon
              fillColor={wishlistColor ? "#FC76AA" : "#1C1B1F"}
            />
          </span>
        </div>
      </Link>
      <ShoppingBagModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ProductCard;
