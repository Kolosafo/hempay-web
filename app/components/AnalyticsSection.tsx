import Image from "next/image";
import React from "react";

const AnalyticsSection = () => {
  return (
    <section className="main-bg px-10 w-full flex flex-col justify-center items-center mt-8 gap-2">
      <span className="text-2xl md:text-4xl font-bold">
        Your Portal to the Future of Finance
      </span>
      <span className="text-lg md:text-2xl">
        Fast, Flexible, and Forward-Thinking
      </span>
      <div className="flex md:flex-row flex-col w-full  items-center justify-around md:px-20 px-10">
        <Image
          src={"/analyticsCard1.png"}
          unoptimized
          alt="analyticsCard"
          width={500}
          height={500}
          className="object-contain md:w-1/2 w-[90%]"
        />
        <Image
          src={"/arrow.png"}
          unoptimized
          alt="arrow"
          width={80}
          height={10}
          className="object-contain mr-4 w-[20%] md:block hidden"
        />
        <Image
          src={"/womanDoor.png"}
          unoptimized
          alt="arrow"
          width={100}
          height={100}
          className="object-contain md:w-full w-[50%]"
        />
      </div>
    </section>
  );
};

export default AnalyticsSection;
