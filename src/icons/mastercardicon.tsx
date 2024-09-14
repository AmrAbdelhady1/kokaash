import * as React from "react";
import mastercardImg from '../../public/images/mastercardicon.png'
import Image from "next/image";

export const MastercardIcon = () => (
  // <a
  //   href="https://www.instagram.com/amrabdelhady99/"
  //   target="_blank"
  //   aria-label="Read more about Seminole tax hike"
  // >
    <Image src={mastercardImg} alt="mastercard"
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
  // </a>
);