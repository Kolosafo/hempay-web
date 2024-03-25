import Image from "next/image";
import React from "react";

const HarnessCard = () => {
  return (
    <section className="main-bg flex w-full flex-col my-16 justify-center px-4 items-center shrink-0 gap-6">
      <span className="text-2xl md:text-4xl my-6 font-bold w-full md:w-[60%] text-center md:text-left">
        Harnessing the Power of Tech to Unleash Your Financial Potential
      </span>
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-8">
        <div className="flex items-center justify-center ml-0 md:ml-10 flex-col">
          <div className="flex md:justify-start w-full justify-center gap-8">
            <Image
              src={"/harnessImgs/img1.png"}
              alt="img"
              width={100}
              height={100}
              className="object-contain md:w-[40%] w-[30%]"
            />
            <Image
              src={"/harnessImgs/img2.png"}
              alt="img"
              width={100}
              height={100}
              className="object-contain w-[30%] md:w-[40%]"
            />
          </div>
          <div className="flex md:justify-start justify-center md:-mt-3 mt-3">
            <Image
              src={"/harnessImgs/img3.png"}
              alt="img"
              width={530}
              height={530}
              className="object-contain w-[70%]"
            />
            <Image
              src={"/harnessImgs/img5.png"}
              alt="img"
              width={200}
              height={200}
              className="object-contain md:block hidden"
            />
          </div>
        </div>
        <div>
          <Image
            src={"/harnessImgs/img4.png"}
            alt="img"
            width={400}
            height={400}
            className="object-contain hidden md:block md:-ml-28 -ml-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HarnessCard;
