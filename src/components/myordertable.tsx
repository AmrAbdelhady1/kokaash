import React from "react";
import Image from "next/image";
import productImg from "../../public/images/baby1.jpeg";

const MyOrderTable = () => {
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
    <div className="hidden md:block">
      <div className="py-5 px-0 lg:px-5 border-b font-MDLZ border-b-black grid grid-cols-8 items-center justify-center text-xl uppercase text-center">
        <p>Item</p>
        <p>Number</p>
        <p>Order</p>
        <p>size</p>
        <p>color</p>
        <p>quantity</p>
        <p>price</p>
        <p>status</p>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-8 items-center justify-center py-5 px-0 lg:px-5 text-[15px] leading-5 capitalize text-center"
        >
          <Image
            src={product.image}
            alt="product image"
            className='w-[66px] h-[66px] rounded-lg mx-auto'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <p>{product.number}</p>
          <p>{product.productName}</p>
          <p>{product.size}</p>

          <p
            className={`w-[23px] h-[23px] bg-[${product.color}] rounded-full mx-auto`}
          ></p>

          <p>{product.quantity}</p>
          <p>{product.price} KWD</p>

          <p
            className={`font-Gotham ${
              product.status === "Delivered"
                ? "text-[#53BDF2]"
                : product.status === "Shipping phase"
                ? "text-[#F174A7]"
                : "text-black"
            }`}
          >
            {product.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrderTable;
