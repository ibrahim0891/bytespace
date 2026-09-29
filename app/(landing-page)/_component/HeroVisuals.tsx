import React from "react";
import Image from "next/image";
import { UiUxCard, ProgressCard, HappyStudentsCard } from "./FloatingCards";

export const HeroVisuals = () => {
  return (
    <div className="relative w-full mx-auto flex justify-center items-end mt-8 sm:mt-4 select-none">
      {/* 3D Decorative Spiral positioned at the left edge */}
      <div className="absolute -left-50 top-[-55%] w-20 sm:w-28 md:w-90 pointer-events-none z-20">
        <Image
          src="/hero section/Frame-1.png"
          alt="3D Decorative Spiral"
          width={150}                         
          height={150}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3D Decorative Cone positioned at the right edge */}
      <div className="absolute -right-50 top-[-50%] w-20 sm:w-28 md:w-80 pointer-events-none z-20">
        <Image
          src="/hero section/Cone-1.png"
          alt="3D Decorative Cone"
          width={372}
          height={372}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Background Lime Ring (Half visible in hero section, bottom half clipped by section overflow) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-15 w-[580px] sm:w-[750px] md:w-[950px] lg:w-[1200px] aspect-square pointer-events-none z-0">
        <Image
          src="/hero section/center-figure-background.png"
          alt="Hero Background Arch"
          width={1149}
          height={1149}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3D White Floating Shapes */}
      {/* 1. Top-Left White Spiral */}
      <div className="absolute -top-10 sm:-top-20 left-10 sm:left-20 md:left-32 lg:left-36 w-16 sm:w-24 md:w-36 pointer-events-none z-20 -rotate-12">
        <Image
          src="/hero section/right spiral .png"
          alt="3D White Spiral"
          width={332}
          height={332}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 2. Bottom-Left White Torus / Donut */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 md:left-20 lg:-left-8 w-24 sm:w-32 md:w-40 lg:w-64 pointer-events-none z-20">
        <Image
          src="/hero section/Cone.png"
          alt="3D White Torus"
          width={344}
          height={344}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3. Top-Right White Pyramid Cone */}
      <div className="absolute -top-8 sm:-top-12 right-12 sm:right-24 md:right-36 lg:right-30 w-16 sm:w-20 md:w-36 pointer-events-none z-20">
        <Image
          src="/hero section/Cone-2.png"
          alt="3D White Pyramid"
          width={189}
          height={189}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 4. Bottom-Right White Spiral */}
      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 md:right-0 lg:-right-24 w-24 sm:w-32 md:w-40 lg:w-80 pointer-events-none z-20">
        <Image
          src="/hero section/right spiral .png"
          alt="3D White Spiral"
          width={332}
          height={332}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main Center Hero Graphic with Floating Badge Cards */}
      <div className="relative flex justify-center items-end z-10 w-full max-w-[550px]">
        {/* Top-Left: UI/UX Design Card */}
        <UiUxCard className="absolute top-[16%] -left-8 sm:-left-16 md:-left-24 lg:-left-28 z-30" />

        {/* Top-Right: Learning Progress Card */}
        <ProgressCard className="absolute top-[20%] -right-10 sm:-right-18 md:-right-28 lg:-right-36 z-30" />

        {/* Bottom-Left: Happy Students Card */}
        <HappyStudentsCard className="absolute bottom-[16%] -left-10 sm:-left-20 md:-left-28 lg:-left-32 z-30" />

        {/* Center Student Figure */}
        <Image
          src="/hero section/center-figure.png"
          alt="ByteSpace Hero Center Figure"
          width={571}
          height={515}
          priority
          className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[550px] h-auto object-contain mx-auto"
        />
      </div> 
    </div>
  );
};

export default HeroVisuals;
