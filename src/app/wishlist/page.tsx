"use client";

import React from "react";
import Sort from "@/components/sort";
import ProductCard from "@/components/productcard";
import productImg from "../../../public/images/baby1.jpeg";
import PagePagination from "@/components/pagepagination";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 2,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: false,
      discountPrice: 120,
    },
    {
      id: 3,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 4,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 5,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
  ];
  const onAddingToCart = () => {
  };

  return (
    <div className="w-full py-11 md:px-16 px-[20px]">
      <div className="flex items-center justify-between w-full mb-8 gap-2">
        <h1 className="text-[#FC76AA] text-[20px] md:text-[32px] tracking-[-1px] md:tracking-[-1.6px] font-Gotham">
          Wishlist
        </h1>
        <Sort />
      </div>

      <div className="flex flex-wrap w-full gap-7">
        {products.map((product) => (
          <div className="mx-auto md:mx-0" key={product.id}>
          <ProductCard
            id={product.id}
            productName={product.productName}
            description={product.description}
            image={product.image}
            price={product.price}
            isSale={product.isSale}
            discountPrice={product.discountPrice}
          />
          </div>
        ))}
      </div>

      <PagePagination />
    </div>
  );
};

export default Wishlist;
