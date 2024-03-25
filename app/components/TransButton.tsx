import Image from "next/image";
import React from "react";

const TransButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-[#914617] text-xs bg-transparent flex justify-center items-center px-4 py-2 cursor-pointer rounded-md bg-gradient-to-r from-[#914617] to-[#4A2A13] text-transparent bg-clip-text font-semibold"
    >
      <span className="text-center">{title}</span>
    </div>
  );
};

export default TransButton;
