import Image from "next/image";
import React from "react";

const CarouselCardTwo = ({
  imgSrc,
  title1,
  title2,
  bg,
}: {
  imgSrc: string;
  title1: string;
  title2: string;
  bg: string;
}) => {
  return (
    <div className="shrink-0 flex flex-col w-56 md:w-80 pb-3 text-white gap-2 bg-[#272626] rounded-md">
      <div className={`w-full rounded-md flex justify-center p-2 ${bg}`}>
        {" "}
        <Image
          src={imgSrc}
          alt="card-img"
          width={100}
          unoptimized
          height={100}
          className="object-contain"
        />
      </div>
      <div className="w-full px-4 flex flex-col gap-2 my-2">
        <span className="text-lg md:text-2xl font-bold">{title1}</span>
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
    </div>
  );
};

export default CarouselCardTwo;
