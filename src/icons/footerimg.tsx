import * as React from "react";
import footerImg from '../../public/images/footerimg.svg'
import Image from "next/image";

export const FooterImg = () => (
  <Image src={footerImg} alt="footer image"
    priority
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
);