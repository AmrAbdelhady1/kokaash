import * as React from "react";
import applePayImg from '../../public/images/applepay.png'
import Image from "next/image";

export const ApplePayIcon = () => (
  // <a
  //   href="https://www.instagram.com/amrabdelhady99/"
  //   target="_blank"
  //   aria-label="Read more about Seminole tax hike"
  // >
    <Image src={applePayImg} alt="apple pay"
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
  // </a>
);