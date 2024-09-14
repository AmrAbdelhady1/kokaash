"use client";

import React, { useState } from "react";
import image1 from "../../public/images/productimage.png";
import image2 from "../../public/images/product-image-2.png";
import image3 from "../../public/images/product-image-1.png";
import Image from "next/image";
import { BoxIcon, CarIcon, QtyAddIcon, QtySubIcon, SecureIcon } from "@/icons";
import ShoppingBagModal from "./shoppingBagModal";
import ImageSlider from "./imageslider";

const ProductForm = () => {
  const product = {
    name: "Corduroy Bloomers",
    slug: "Babyccino",
    sizes: ["3-6 months", "6-9 months", "9-12 months"],
    colors: ["#66457E", "#FFD89F", "#F174A7"],
    price: 150,
    afterdiscount: 120,
    images: [image2, image1, image3],
  };

  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onAddingToCart = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mb-[70px]">
      <div className="flex flex-col lg:flex-row lg:items-start justify-start gap-4 mb-[30px]">
        <div className="hidden lg:flex flex-col gap-[13px]">
          {product.images.map((image, imageIndex) => (
            <Image
              src={image}
              key={imageIndex}
              alt="product image"
              className={`w-[101px] h-[101px] cursor-pointer hover:grayscale-0
            ${imageIndex === index ? "border-black border" : "grayscale"}`}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              onClick={() => setIndex(imageIndex)}
            />
          ))}
        </div>
        <h1 className="font-MDLZ lg:text-[30px] text-[18px] uppercase lg:hidden block">{product.name}</h1>
        <h1 className="font-GothamLight capitalize leading-5 lg:text-[18px] mb-[15px] lg:hidden block">
          {product.slug}
        </h1>
        <ImageSlider />
        <Image
          src={product.images[index]}
          alt="product image"
          className={`w-full h-full max-w-[284px] lg:max-w-[533px] max-h-[364px] lg:max-h-[684px] hidden lg:block`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />

        <div className="lg:mx-4">
          <h1 className="font-MDLZ text-[30px] uppercase hidden lg:block">{product.name}</h1>
          <h1 className="font-GothamLight capitalize leading-5 text-[18px] mb-[15px] hidden lg:block">
            {product.slug}
          </h1>

          <h1 className="font-MDLZ lg:text-[25px] uppercase mb-2">size</h1>
          <div className="flex items-center gap-[10px] mb-4">
            {product.sizes.map((size, idx) => (
              <button
                key={idx}
                className="py-1 px-2 lg:px-6 bg-cyanButtons text-xs lg:text-sm text-white font-Gotham capitalize leading-5 rounded-[100px]"
              >
                {size}
              </button>
            ))}
          </div>

          <h1 className="font-MDLZ lg:text-[25px] uppercase mb-2">color</h1>
          <div className="flex items-center gap-[20px] mb-4">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                className={`h-[23px] w-[23px] bg-[${color}] rounded-full`}
              ></button>
            ))}
          </div>

          <h1 className="font-MDLZ lg:text-[25px] uppercase">price</h1>
          <div className="flex items-center gap-12 mb-3">
            <h1 className="font-MDLZ lg:text-[25px] uppercase text-customPink">
              {product.price}
            </h1>
            <h1 className="font-MDLZ lg:text-[25px] uppercase text-[#7F7F7F]">
              <del>{product.afterdiscount}</del>
            </h1>
          </div>

          <div className="flex items-center gap-2 mb-2 ml-1">
            <CarIcon />
            <h1 className="font-GothamLight text-[15px] capitalize leading-5">
              Fast Delivery! (1-2 Business Days)
            </h1>
          </div>

          <div className="flex items-center gap-2 mb-2 ml-1">
            <BoxIcon />
            <h1 className="font-GothamLight text-[15px] capitalize leading-5">
              Easy returns
            </h1>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <SecureIcon />
            <h1 className="font-GothamLight text-[15px] capitalize leading-5">
              Secure payments
            </h1>
          </div>

          <div className="flex items-center gap-[21px] mb-6">
            <h1 className="font-MDLZ lg:text-[25px] uppercase">Quantity</h1>
            <QtyAddIcon />
            <p className="">1</p>
            <QtySubIcon />
          </div>

          <button
            onClick={onAddingToCart}
            className="flex items-center justify-center w-full max-w-[341px] h-[60px] rounded-[29px]
        bg-[#53BDF2] text-white font-MDLZ lg:text-[25px] uppercase mb-4"
          >
            ADD TO BAG
          </button>

          <button
            className="flex items-center justify-center w-full max-w-[341px] h-[60px] rounded-[29px]
        bg-customPink text-white font-MDLZ lg:text-[25px] uppercase"
          >
            BUY IT NOW !
          </button>
        </div>
      </div>

      <div className="lg:mx-[113px] max-w-[533px]">
        <h1 className="font-MDLZ lg:text-[25px] uppercase mb-2">DESCRIPTION</h1>
        <p className="font-GothamLight text-[#7F7F7F] text-xs lg:text-base mb-[19px]">
          Gucci transcribes its heritage, creativity, and innovation into a
          plenitude of collections. From staple items to distinctive
          accessories, from the everyday wardrobe to special occasions, the
          House's beloved motifs embellish the latest leathergoods. Here a
          briefcase appears in jumbo GG taupe leather as part of the new luggage
          line.
        </p>

        <h1 className="font-MDLZ lg:text-[25px] uppercase mb-2">
          SHIPPING & RETURNS
        </h1>
        <p className="font-GothamLight text-xs lg:text-base text-[#7F7F7F]">
          Free standard shipping and free 60-day returns.
        </p>
      </div>
      <ShoppingBagModal isOpen={isOpen} onRequestClose={onClose} />
    </div>
  );
};

export default ProductForm;
