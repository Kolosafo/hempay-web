import Image from "next/image";
import React from "react";

const EconomySection = () => {
  return (
    <section className="main-bg py-10 md:py-0 w-full text-white bg-[#272626] md:flex-row flex-col flex justify-center items-center">
      <div className="flex flex-col md:items-start items-center gap-4">
        <span className="text-2xl md:text-5xl font-bold">Economy Emoji</span>
        <span className="text-lg md:text-2xl w-full md:w-[80%]">
          Speak the language of money with a tap
        </span>
      </div>
      <div className="md:w-auto w-full md:block flex justify-center">
        <Image
          src={"/handOnPhone.png"}
          alt="img"
          width={400}
          height={400}
          className="object-contain md:w-[80%] w-[30%]"
        />
      </div>
    </section>
  );
};

export default EconomySection;
