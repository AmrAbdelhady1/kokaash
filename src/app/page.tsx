import ProductCard from "@/components/productcard";
import { BannerBackground } from "@/icons/BannerBackground";
import { newArrivalProducts, saleProducts } from "./mainPage.service";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-530 w-full bg-customPink flex items-center justify-end">
        {/* <div className="w-[471px] h-[226px] flex-shrink-0 text-white text-center font-MDLZ text-[75px] font-normal leading-[1.2] flex flex-col">
          <span>ALL YOU NEED </span>
          <span>FOR YOUR </span>LITTLE ONES
        </div> */}

        {/* <BannerBackground></BannerBackground> */}
        {/* <img className="absolute" src="/images/banner-kid.png" alt="kid" /> */}
      </div>
      <img
        className="cursor-pointer w-full sm:w-[]"
        src="/images/Header.png"
        alt="kid"
      />
      <div className="w-full flex justify-center gap-[36px] mt-[44px] mb-[44px]  sm:flex-wrap lg:flex-nowrap">
        {/* <Link href={"/filter-page"}> */}
        <img
          className="cursor-pointer lg:w-full sm:w-[149px] md:h-full"
          src="/images/kid-girl.png"
          alt="kid"
        />
        {/* </Link> */}
        <img
          className="cursor-pointer lg:w-full sm:w-[149px] md:h-full"
          src="/images/kid-boy.png"
          alt="kid"
        />
        <img
          className="cursor-pointer lg:w-full   sm:w-[149px] md:h-full"
          src="/images/baby-boy.png"
          alt="kid"
        />
        <img
          className="cursor-pointer lg:w-full  sm:w-[149px]"
          src="/images/baby-girl.png"
          alt="kid"
        />
      </div>
      <div className="sm-[75px]">
        <img
          className="w-full cursor-pointer"
          src="/images/ramadan.png"
          alt="ramadan"
        />
      </div>
      <div className="mb-[104px]">
        <div className="flex justify-between  mr-[85px] ml-[87px] mb-[40px] mt-10">
          <div className="text-black text-center font-MDLZ text-30 font-normal">
            NEW ARRIVAL
          </div>
          <div className="text-customPink text-right font-Gotham text-24 font-semibold leading-5 capitalize cursor-pointer">
            View All
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[112px] gap-[53px] md:ml-[70px] md:mr-[70px] mx-[25px] place-items-center">
          {newArrivalProducts.map((product) => (
            <div className="md:w-[240px] w-[144px]">
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
      </div>
      <div className="">
        <div className="flex justify-between  mr-[85px] ml-[87px] mb-[40px]">
          <div className="text-black text-center font-MDLZ text-30 font-normal">
            SALE ITEMS
          </div>
          <div className="text-customPink text-right font-Gotham text-24 font-semibold leading-5 capitalize cursor-pointer">
            View All
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[112px] gap-[53px] md:ml-[70px] md:mr-[70px] mx-[25px] place-items-center">
          {saleProducts.map((product) => (
            <div className="md:w-[240px] w-[144px] ">
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
      </div>
      <div className="md:mr-[72px] md:ml-[70px] md:mb-[69px] m-[25px] w-[90%] ">
        <img
          className="m-auto"
          src="/images/new-arrival-banner.png"
          alt="new arrival"
        />
      </div>

      <div className="flex flex-col justify-start md:mr-[72px] md:ml-[70px] md:mb-[106px] m-[25px]">
        <h1 className="text-black text-start font-MDLZ text-30 font-normal mb-[17px]">
          STORES
        </h1>
        <div className="grid md:grid-cols-4 gap-[59px] grid-cols-2 place-items-center">
          <img
            className="cursor-pointer"
            src="/images/store-1.png"
            alt="new arrival"
          />
          <img
            className="cursor-pointer"
            src="/images/store-2.png"
            alt="new arrival"
          />
          <img
            className="cursor-pointer"
            src="/images/store-3.png"
            alt="new arrival"
          />
          <img
            className="cursor-pointer"
            src="/images/store-4.png"
            alt="new arrival"
          />
        </div>
      </div>
    </main>
  );
}
