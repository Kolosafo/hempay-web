import Image from "next/image";
import React from "react";

const CarouselCard = ({
  imgSrc,
  title1,
  title2,
}: {
  imgSrc: string;
  title1: string;
  title2: string;
}) => {
  return (
    <div className="shrink-0 flex flex-col md:w-80 w-56 py-3 text-white px-4 gap-2 bg-[#272626] rounded-md">
      <Image
        src={imgSrc}
        alt="card-img"
        width={100}
        unoptimized
        height={100}
        className="object-contain"
      />
      <span className="text-xl md:text-2xl font-bold w-full md:w-[80%]">
        {title1}
      </span>
      <span className="text-sm">{title2}</span>
      <div className="flex gap-2 mt-4 cursor-pointer">
        <Image
          src={"/learnMoreIcon.png"}
          alt="learnMoreIcon"
          width={15}
          height={15}
          unoptimized
          className="object-contain"
        />
        <span className="text-sm">Learn More</span>
      </div>
    </div>
  );
};

export default CarouselCard;
