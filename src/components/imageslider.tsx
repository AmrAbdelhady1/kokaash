import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../public/images/productimage.png";
import image2 from "../../public/images/product-image-2.png";
import image3 from "../../public/images/product-image-1.png";
import Image from "next/image";

export default function ImageSlider() {

  const images = [image2, image1, image3];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
  };
  return (
    <div className="block lg:hidden">
      <Slider {...settings}>
        {images.map((image, index) =>
          <div key={index} className="px-1 w-[284px] h-[364px]">
            <Image
              src={image}
              alt="img"
              priority
              className="mx-auto w-[284px] h-[364px]"
            />
          </div>
        )}
      </Slider>
    </div>
  );
}
