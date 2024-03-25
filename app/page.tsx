"use client";
import Image from "next/image";
import BaseButton from "./components/BaseButton";
import TransButton from "./components/TransButton";
import CarouselCard from "./components/CarouselCard";
import Navbar from "./components/Navbar";
import RadioCard from "./components/RadioCard";
import CarouselCardTwo from "./components/CarouselCard2";
import Footer from "./components/Footer";
import AnalyticsSection from "./components/AnalyticsSection";
import HarnessCard from "./components/HarnessCard";
import EconomySection from "./components/EconomySection";
import { useState } from "react";
import MobileMenu from "./components/MobileNav/MobileMenu";

export default function Home() {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative main-bg flex md:flex-row flex-col w-full md:h-[100vh] h-auto mb-20 px-16 pt-32">
      <MobileMenu
        isOpen={openMobileNav}
        setCloseNav={setOpenMobileNav}
      />
        <Navbar
          setOpenMobileNav={setOpenMobileNav}
          additionalStyle="absolute top-0 left-0"
        />

        <div className="flex flex-col md:items-start md:mb-0 mb-12 items-center mt-4 gap-20 md:basis-[40%] basis-full w-full h-full">
          <span className="md:text-4xl text-2xl font-bold baseText">
            The Ultimate Payment Experience
          </span>
          <span className="md:text-start text-center">
            Go Global, Pay Local with Hempay&apos;s Multi-Currency Virtual
            Cards. Diversify Your Portfolio with Hempay: Access the World&apos;s
            Currencies at Your Fingertips
          </span>
          <div className="flex gap-4">
            <BaseButton title="Create a free account" />
            <TransButton title="Contact sales" />
          </div>
        </div>
        <div className="basis-[60%] flex md:justify-end justify-center w-full h-full">
          <Image
            unoptimized
            src={"/phoneDesign1.png"}
            alt="phoneDesign1"
            className="md:w-[60%] w-[80%] object-contain"
            width={250}
            height={250}
          />
        </div>
      </section>
      <section className="flex md:flex-row flex-col w-full md:h-[70vh] h-auto md:my-20 my-10 md:px-32 px-10">
        <div className="flex flex-col md:items-start items-center mt-4 gap-10 basis-[40%] w-full h-full">
          <span className="text-2xl md:text-left text-center md:text-4xl font-bold text-black">
            Seamless Swaps, Effortless Payments
          </span>
          <span className="text-2xl md:text-3xl text-center md:text-left font-light">
            Hempay Makes Currency Exchange a Breeze
          </span>
          <div>
            <BaseButton title="Get Started" additionSyle="py-2" />
          </div>
        </div>
        <div className="basis-[60%] justify-center md:mt-0 mt-6 flex md:justify-end w-full h-full">
          <Image
            unoptimized
            src={"/phone2.png"}
            alt="phone2"
            className="md:w-1/2 w-[40%] object-contain"
            width={200}
            height={200}
          />
        </div>
      </section>
      <section className="flex no-scrollbar px-4 gap-4 md:justify-center justify-normal md:overflow-x-auto overflow-x-scroll w-full">
        <CarouselCard
          imgSrc="/cImg1.png"
          title1="Unlock Financial Freedom:"
          title2="Hempay's Multi Language Support Welcomes You Home"
        />
        <CarouselCard
          imgSrc="/cImg2.png"
          title1="Multi Virtual Cards, up to eleven"
          title2="Enjoy the sweetness of multi currency flow"
        />
        <CarouselCard
          imgSrc="/cImg3.png"
          title1="Stack your coins, diversify your bag"
          title2="Hempay speaks all money languages, from Naira to USD to Yen"
        />
      </section>
      <section className="w-full main-bg flex flex-col md:px-28 px-10 mt-20">
        <span className="text-2xl md:text-4xl md:w-[40%] w-full font-bold mb-6">
          Seamless Swaps, Effortless Payments:
        </span>
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="flex flex-col gap-4 items-start">
            <RadioCard title="Chat" />
            <RadioCard title="Connect" />
            <RadioCard
              additionalStyle="w-[70%]"
              title="Reconnect with Family, Friends and Business Partners"
            />
          </div>
          <Image
            src={"/hero2.png"}
            alt="img"
            width={400}
            height={400}
            className="object-contain"
            unoptimized
          />
        </div>
      </section>
      <section className="w-full main-bg flex flex-col px-10 md:px-28 mt-20">
        <span className="text-2xl md:text-4xl w-full md:w-[40%] font-bold mb-6 self-center md:self-end text-center md:text-end">
          Card design so lit, it&lsquo;s got its own hype.
        </span>
        <div className="flex md:flex-row flex-col w-full justify-between">
          <Image
            src={"/cardImg.png"}
            alt="img"
            width={800}
            height={800}
            className="object-contain md:-mt-16 -mt-6"
            unoptimized
          />
          <div className="flex w-full flex-col gap-4 items-center md:items-end">
            <span className="w-full text-xl md:text-2xl text-center md:text-end">
              Customise with Hempay and stunt on &apos;em.
            </span>
            <BaseButton title="Get Started" additionSyle="py-2" />
          </div>
        </div>
      </section>
      <section className="gradientBg no-scrollbar flex gap-4 items-center md:justify-center justify-normal md:overflow-x-auto overflow-x-scroll md:px-0 px-4 py-4 mt-20 w-full">
        <CarouselCardTwo
          bg="bg-[#7370FB]"
          imgSrc="/card2Icon.png"
          title1="Cashless? Fearless!"
          title2="Go boldly where no transaction has gone before."
        />

        <CarouselCardTwo
          bg="bg-[#9BB460]"
          imgSrc="/card2Icon3.png"
          title1="Tap into Tomorrow"
          title2="Next-gen payments for the next-gen you"
        />
        <CarouselCardTwo
          bg="bg-[#5F25DB]"
          imgSrc="/card2Icon2.png"
          title1="Dough on the Down-Low"
          title2="Keep it hush, but make that cash rush"
        />
      </section>
      <AnalyticsSection />
      <HarnessCard />
      <EconomySection />
      <Footer />
    </main>
  );
}
