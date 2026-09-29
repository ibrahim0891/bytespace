import React from "react";
import Image from "next/image";
import { UiUxCard, ProgressCard, HappyStudentsCard } from "./FloatingCards";

export const HeroVisuals = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end mt-8 sm:mt-12 select-none">
      {/* 3D Decorative Floating Shapes (Left Side) */}
      <div className="absolute -left-4 sm:-left-12 lg:-left-20 top-6 w-24 sm:w-32 md:w-36 pointer-events-none z-10 animate-pulse transition-transform duration-1000">
        <Image
          src="/hero section/Auto Layout Vertical-1.png"
          alt="3D Shape"
          width={150}
          height={150}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute left-4 sm:left-0 top-[38%] w-16 sm:w-24 md:w-28 pointer-events-none z-10">
        <Image
          src="/hero section/Cone-1.png"
          alt="3D Shape"
          width={120}
          height={120}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      <div className="absolute -left-6 sm:-left-10 lg:-left-16 bottom-6 w-28 sm:w-36 md:w-44 pointer-events-none z-10">
        <Image
          src="/hero section/Frame-1.png"
          alt="3D Shape"
          width={180}
          height={180}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3D Decorative Floating Shapes (Right Side) */}
      <div className="absolute -right-4 sm:-right-12 lg:-right-20 top-4 w-24 sm:w-32 md:w-40 pointer-events-none z-10">
        <Image
          src="/hero section/Cone.png"
          alt="3D Shape"
          width={160}
          height={160}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute right-6 sm:right-2 top-[34%] w-20 sm:w-28 md:w-32 pointer-events-none z-10">
        <Image
          src="/hero section/Cone-2.png"
          alt="3D Shape"
          width={130}
          height={130}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      <div className="absolute -right-6 sm:-right-8 lg:-right-16 bottom-8 w-24 sm:w-32 md:w-36 pointer-events-none z-10">
        <Image
          src="/hero section/Auto Layout Vertical.png"
          alt="3D Shape"
          width={150}
          height={150}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Center Main Lime Circle & Student Portrait */}
      <div className="relative flex justify-center items-end">
        {/* Big Lime Backdrop Circle */}
        <div className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] rounded-full bg-[#D4FF00] overflow-hidden flex items-end justify-center relative">
          <div className="relative w-full h-[95%]">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=85"
              alt="Student with laptop"
              fill
              priority
              sizes="(max-width: 768px) 340px, 580px"
              className="object-cover object-top scale-105"
            />
          </div>
        </div>

        {/* Floating Badge Cards */}
        <UiUxCard className="absolute top-[25%] -left-6 sm:-left-12 md:-left-20 z-20" />
        
        <ProgressCard className="absolute top-[28%] -right-6 sm:-right-12 md:-right-16 z-20" />

        <HappyStudentsCard className="absolute bottom-8 -left-4 sm:-left-10 md:-left-16 z-20" />
      </div>
    </div>
  );
};

export default HeroVisuals;
