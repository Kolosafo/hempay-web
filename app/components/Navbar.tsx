import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import HamburgerMenu from "./MobileNav/HamburgerMenu";

const Navbar = ({
  additionalStyle,
  setOpenMobileNav,
}: {
  additionalStyle: string;
  setOpenMobileNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav
      className={`w-full flex h-16 mt-4 md:px-12 px-6 justify-between bg-transparent items-center ${additionalStyle}`}
    >
      <Image
        src={"/logo.png"}
        className="object-contain w-[15%] md:w-[6%]"
        width={100}
        height={100}
        unoptimized
        alt="logo"
      />
      <div className="text-xs font-semibold md:flex hidden gap-8">
        <span>Why Hempay</span>
        <span>Customers</span>
        <span>Pricing</span>
        <span>Learn</span>
      </div>
      <div className="text-xs font-semibold hidden md:flex gap-8">
        <span>Enterprise</span>
        <span>SME</span>
        <span>Personal</span>
        <span>Resources</span>
        <span>Developers</span>
      </div>
      <HamburgerMenu setOpenMenu={setOpenMobileNav} />
    </nav>
  );
};

export default Navbar;
