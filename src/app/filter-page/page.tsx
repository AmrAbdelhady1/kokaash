"use client";

import React, { useState } from "react";
import Sort from "@/components/sort";
import ProductCard from "@/components/productcard";
import productImg from "../../../public/images/baby1.jpeg";
import FilterBar from "@/components/filterbar";
import { FilterDeleteIcon } from "@/icons";
import FilterBarMobile from "@/components/filterbarmobile";
import { FilterMobileIcon } from "@/icons/filtericons";
import PagePagination from "@/components/pagepagination";

const FilterPage = () => {
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
    {
      id: 6,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 7,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: false,
      discountPrice: 120,
    },
    {
      id: 8,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 9,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 10,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 11,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: true,
      discountPrice: 120,
    },
    {
      id: 12,
      productName: "Product Name",
      description: "description",
      image: productImg,
      price: 150,
      isSale: false,
      discountPrice: 120,
    },
  ];

  const [filters, setFilters] = useState<string[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const deleteFilter = (filter: string) => {
    const filterData = filters.filter((item) => item !== filter);
    setFilters(filterData);
  };

  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const onAddingToCart = () => {
  };

  return (
    <div className="lg:py-[52px] lg:px-[70px] flex items-start gap-[51px]">
      <FilterBar filters={filters} onChange={(val) => setFilters(val)} />

      <div className="w-full">
        
        <div className="flex items-center gap-2 justify-between mb-[26px] relative px-[15px] lg:px-0 py-[20px] lg:py-0 w-full shadow-bottom-2xl lg:shadow-transparent">
          <div className="flex items-center gap-2 lg:hidden cursor-pointer" onClick={handleFilter}>
            <FilterMobileIcon />
            <h1 className="font-Gotham text-[15px]">FILTER</h1>
          </div>
          {openFilter && <FilterBarMobile filters={filters} onChange={(val) => setFilters(val)} />}
          <div className="flex items-center flex-wrap gap-[12px]">
            {filters.length > 0 ? (
              filters.map((filter) => (
                <div
                  key={filter}
                  className="rounded-[27px] bg-customPink lg:py-2 px-1 lg:px-3 flex items-center justify-between
             text-white text-[11px] lg:text-xl leading-5 capitalize gap-1 lg:gap-[24px]"
                >
                  <p>{filter}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => deleteFilter(filter)}
                  >
                    <FilterDeleteIcon />
                  </p>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>

          <Sort />
        </div>

        <div className="flex flex-wrap w-full justify-between gap-7">
          {products.map((product) => (
            <div key={product.id} className="mx-auto">
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
    </div>
  );
};

export default FilterPage;
