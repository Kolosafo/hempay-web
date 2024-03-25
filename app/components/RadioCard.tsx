import Image from "next/image";
import React from "react";

const RadioCard = ({
  title,
  additionalStyle,
}: {
  title: string;
  additionalStyle?: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={"/checkIcon.png"}
        alt="img"
        width={20}
        height={20}
        unoptimized
      />
      <span className={additionalStyle}>{title}</span>
    </div>
  );
};

export default RadioCard;
