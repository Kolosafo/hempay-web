import Image from "next/image";
import React from "react";

const BaseButton = ({
  title,
  onClick,
  additionSyle,
}: {
  title: string;
  onClick?: () => void;
  additionSyle?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`gradientBg text-white text-xs px-4 rounded-md relative font-semibold ${additionSyle}`}
    >
      <Image
        src={"/buttonDesign.png"}
        alt="btn-img"
        unoptimized
        width={50}
        height={50}
        className="absolute top-0 w-full h-full"
      />
      {title}
    </button>
  );
};

export default BaseButton;
