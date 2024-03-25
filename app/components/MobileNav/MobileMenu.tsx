import { Dispatch, FC, SetStateAction, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaChartLine, FaHome } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";
type Props = {
  setCloseNav: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};
const MobileMenu: FC<Props> = ({ setCloseNav, isOpen }) => {
  return (
    <div
      className={`h-screen w-screen absolute top-0 left-0 bg-[#140d27] py-16 px-8 z-50 text-white ${
        isOpen ? " slide-in-left-enter-active" : "slide-in-left-leave-to"
      }`}
    >
      <Image
        src={"/logo.png"}
        className="object-contain mb-10"
        width={80}
        height={80}
        unoptimized
        alt="logo"
      />
      <div className="flex flex-col border-1 gap-10 mt-0">
        <div className="text-xs flex-col font-semibold flex gap-8">
          <span>Why Hempay</span>
          <span>Customers</span>
          <span>Pricing</span>
          <span>Learn</span>
        </div>
        <div className="text-xs flex-col font-semibold flex gap-8">
          <span>Enterprise</span>
          <span>SME</span>
          <span>Personal</span>
          <span>Resources</span>
          <span>Developers</span>
        </div>
      </div>
      <div
        className="absolute sm:top-14 top-6 sm:right-16 right-8 cursor-pointer"
        onClick={() => setCloseNav(false)}
      >
        <MdOutlineCancel size={30} />
      </div>
    </div>
  );
};

export default MobileMenu;
