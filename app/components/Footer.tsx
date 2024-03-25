import React from "react";
import BaseButton from "./BaseButton";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-bg h-full w-full flex flex-col mt-20 gap-8 ">
      <div className="bg-[#774521] w-full py-10 text-white flex flex-col self-center items-center gap-4">
        <span className="text-lg md:text-2xl font-bold">Hempay</span>
        <span className="text-base md:text-xl md:text-left text-center">
          Creating a New Era of Financial Freedom with Innovative Payments
          Solutions
        </span>
      </div>
      <div className="flex items-center md:items-start flex-col py-8 gap-8 px-10 pl-16">
        <span className="text-2xl text-center md:text-left md:text-4xl font-bold">
          Download Our Super App
        </span>
        <span className="text-2xl text-center md:text-left md:text-4xl">
          Available for iOS and Android
        </span>
        <div className="flex items-center md:items-start md:flex-row flex-col gap-8">
          <Image
            src={"/googlePlayIcon.png"}
            alt="img"
            width={300}
            height={300}
            unoptimized
            className="object-contain w-[35%]"
          />
          <Image
            src={"/appleIcon.png"}
            alt="img"
            width={300}
            unoptimized
            height={300}
            className="object-contain w-[35%]"
          />
        </div>
      </div>
      <BaseButton title="Learn More" additionSyle="self-center py-2 ml-1" />
      <div className="flex md:flex-row flex-col items-center md:items-start gap-2 w-full justify-around gradientBg py-10 text-white">
        <div className="flex items-center md:mb-0 mb-12 md:items-start gap-2 flex-col">
          <span className="mb-4 font-bold">Solutions</span>
          <span>Global Payments</span>
          <span>Global Payments</span>
          <span>Global Payments</span>
          <span>Global Payments</span>
          <span>Global Payments</span>
        </div>
        <div className="flex items-center md:items-start md:mb-0 mb-12 gap-2 flex-col">
          <span className="mb-4 font-bold">Partners</span>
          <span>Vision</span>
          <span>Company</span>
          <span>Clients</span>
          <span>Hempay Certification</span>
        </div>
        <div className="flex items-center md:items-start md:mb-0 mb-12 gap-2 flex-col">
          <span className="mb-4 font-bold">Legal</span>
          <span>Pravicy Policy</span>
          <span>Privacy Portal Nigeria</span>
          <span>Disclosure Policy</span>
        </div>
        <div className="flex items-center md:items-start md:mb-0 mb-12 gap-2 flex-col">
          <span className="mb-4 font-bold">News and Media</span>
          <span>Insights</span>
          <span>Press Enquiries</span>
          <span>Blog </span>
        </div>
        <div className="flex items-center md:items-start md:mb-0 mb-12 gap-2 flex-col">
          <span className="mb-4 font-bold">Support</span>
          <span>Developer Portal</span>
          <span>Contact Us</span>
          <span>Privacy Team Support </span>
        </div>
        <div className="flex gap-1">
          <FaInstagram size={25} />
          <FaYoutube size={25} />
          <CiLinkedin size={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
