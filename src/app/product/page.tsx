import React from "react";
import ProductForm from "@/components/productform";
import ProductCard from "@/components/productcard";
import productImg from "../../../public/images/baby1.jpeg";
import BackToHomeBtn from "@/components/backtohomebtn";
const Product = () => {
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
  ];
  const onAddingToCart = () => {
  };

  return (
    <div className="lg:p-[70px] px-[25px] py-4">
      <ProductForm />
      <div className="lg:ml-[113px]">
        <h1 className="font-Gotham capitalize lg:text-[24px] mb-[42px]">
          You may also like
        </h1>
        <div className="grid lg:grid-cols-4 gap-[10px] grid-cols-2 w-full mb-[50px] lg:mb-[122px]">
          {products.map((product) => (
            <div key={product.id}>
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

        <h1 className="font-Gotham capitalize lg:text-[24px] mb-[42px]">
          More from Baby ccino store
        </h1>
        <div className="grid lg:grid-cols-4 gap-[10px] grid-cols-2 w-full mb-[50px] lg:mb-[122px]">
          {products.map((product) => (
            <div key={product.id}>
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

        <h1 className="font-Gotham capitalize lg:text-[24px] mb-[42px]">
          More from Baby
        </h1>
        <div className="grid lg:grid-cols-4 gap-[10px] grid-cols-2 w-full mb-[50px] lg:mb-[122px]">
          {products.map((product) => (
            <div key={product.id}>
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

        <BackToHomeBtn className="mx-auto mb-10" />
      </div>
    </div>
  );
};

export default Product;
