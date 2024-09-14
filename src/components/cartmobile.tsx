import React from "react";
import Image from "next/image";
import productImg from "../../public/images/baby1.jpeg";
import { AddIcon, DeleteIcon, SubIcon } from "@/icons";

const CartMoblie = () => {
  const products = [
    {
      id: 1,
      productName: "Hodiee Girl",
      number: "432-123",
      size: "0-3 months",
      image: productImg,
      price: 200,
      color: "#66457E",
      quantity: 1,
      status: "Delivered",
    },
    {
      id: 2,
      productName: "Pink Pants baby",
      number: "532-533",
      size: "3-6 months",
      image: productImg,
      price: 100,
      color: "#F174A7",
      quantity: 2,
      status: "Delivered",
    },
    {
      id: 3,
      productName: "Product Name",
      number: "432-123",
      size: "0-3 months",
      image: productImg,
      price: 150,
      color: "#FFD89F",
      quantity: 1,
      status: "Delivered",
    },
    {
      id: 4,
      productName: "Product Name",
      number: "432-123",
      size: "0-3 months",
      image: productImg,
      price: 150,
      color: "#66457E",
      quantity: 1,
      status: "Shipping phase",
    },
    {
      id: 5,
      productName: "Product Name",
      number: "432-123",
      size: "0-3 months",
      image: productImg,
      price: 150,
      color: "#66457E",
      quantity: 1,
      status: "Preparing",
    },
    {
      id: 6,
      productName: "Product Name",
      number: "432-123",
      size: "0-3 months",
      image: productImg,
      price: 150,
      color: "#66457E",
      quantity: 1,
      status: "Delivered",
    },
  ];
  return (
    <div className="flex flex-col gap-[23px] mb-[26px] md:hidden">
      {products.map((product) => (
        <div className="flex items-start gap-[15px]" key={product.id}>
          <Image
            src={product.image}
            alt="productImg"
            className="max-w-[158px] max-h-[158px] w-full h-full rounded-[8px]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />

          <div className="font-MDLZ my-auto">
            <p>
              NUMBER :{" "}
              <span className="font-GothamLight text-[15px] capitalize">
                {product.number}
              </span>
            </p>
            <p>
              ORDER :{" "}
              <span className="font-GothamLight text-[15px] capitalize">
                {product.productName}
              </span>
            </p>
            <p>
              SIZE :{" "}
              <span className="font-GothamLight text-[15px] capitalize">
                {product.size}
              </span>
            </p>
            <h1 className="flex items-center">
              COLOR :{" "}
              <p
                className={`w-[20px] h-[20px] bg-[${product.color}] rounded-full mx-auto`}
              > </p>
            </h1>
            <p className="flex items-center gap-2 flex-wrap">
              QUANTITY :{" "}
              <span className="font-GothamLight text-[15px] capitalize flex items-center gap-2">
                <SubIcon />
                <span>{product.quantity}</span>
                <AddIcon />
                <DeleteIcon />
              </span>
            </p>
            <p>
              PRICE :{" "}
              <span className="font-GothamLight text-[15px] capitalize">
                {product.price}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMoblie;
