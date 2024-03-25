import React, { useState, FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};
const HamburgerMenu: FC<Props> = ({ setOpenMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenMenu ? setOpenMenu(!isOpen) : null;
  };

  return (
    <div
      className="relative cursor-pointer md:hidden block mr-0 mt-2"
      onClick={toggleMenu}
    >
      <GiHamburgerMenu size={35} />
    </div>
  );
};

export default HamburgerMenu;
