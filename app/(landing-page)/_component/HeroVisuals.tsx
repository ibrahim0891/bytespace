"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UiUxCard, ProgressCard, HappyStudentsCard } from "./FloatingCards";

export const HeroVisuals = () => {
  return (
    <div className="relative w-full mx-auto flex justify-center items-end mt-6 sm:mt-2">
      {/* 1. Large 3D Lime Spiral (Bleeding off Left Edge - Figma: 385px at left: -118px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute -left-24 lg:-left-44 xl:-left-60 -top-36 lg:-top-52 xl:-top-64 w-[220px] lg:w-[300px] xl:w-[385px] pointer-events-none select-none z-10"
      >
        <Image
          src="/hero section/Frame-1.png"
          alt="3D Decorative Spiral"
          width={385}
          height={385}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* 2. Large 3D Lime Cylinder / Cone (Bleeding off Right Edge - Figma: 370px at right: -161px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute -right-24 lg:-right-44 xl:-right-60 -top-32 lg:-top-48 xl:-top-60 w-[210px] lg:w-[290px] xl:w-[370px] pointer-events-none select-none z-10"
      >
        <Image
          src="/hero section/Cone-1.png"
          alt="3D Decorative Cone"
          width={370}
          height={370}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Background Lime Ring (Figma: Ellipse 7, 1149px × 1149px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-8 sm:top-12 lg:top-14 w-[520px] sm:w-[700px] md:w-[880px] lg:w-[1149px] aspect-square pointer-events-none select-none z-0"
      >
        <Image
          src="/hero section/center-figure-background.png"
          alt="Hero Background Arch"
          width={1149}
          height={1149}
          priority
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* 3D White Floating Shapes */}
      {/* 3. Middle-Left White Spiral (Figma: 175px at left: 183px, top: 477px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:block absolute -top-8 sm:-top-14 left-8 sm:left-14 md:left-20 lg:left-24 w-14 sm:w-20 md:w-28 lg:w-[175px] pointer-events-none select-none z-10 -rotate-12 scale-x-[-1]"
      >
        <Image
          src="/hero section/right spiral .png"
          alt="3D White Spiral"
          width={175}
          height={175}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* 4. Bottom-Left White Torus / Cone (Figma: 342px at left: 18px, top: 682px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:block absolute -bottom-2 sm:bottom-2 -left-4 sm:-left-12 md:-left-24 lg:-left-36 xl:-left-44 w-28 sm:w-40 md:w-56 lg:w-[342px] pointer-events-none select-none z-0"
      >
        <Image
          src="/hero section/Cone.png"
          alt="3D White Torus"
          width={342}
          height={342}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* 5. Middle-Right White Pyramid Cone (Figma: 188px at left: 1094px, top: 464px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:block absolute -top-6 sm:-top-10 right-8 sm:right-16 md:right-24 lg:right-28 w-14 sm:w-20 md:w-28 lg:w-[188px] pointer-events-none select-none z-10"
      >
        <Image
          src="/hero section/Cone-2.png"
          alt="3D White Pyramid"
          width={188}
          height={188}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* 6. Bottom-Right White Spiral (Figma: 330px at left: 1127px, top: 672px) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:block absolute bottom-4 sm:bottom-8 right-2 sm:right-0 md:-right-12 lg:-right-24 xl:-right-32 w-28 sm:w-40 md:w-52 lg:w-[330px] pointer-events-none select-none z-10"
      >
        <Image
          src="/hero section/right spiral .png"
          alt="3D White Spiral"
          width={330}
          height={330}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Main Center Hero Graphic with Floating Badge Cards */}
      <div className="relative flex justify-center items-end z-20 w-full max-w-[578px]">
        {/* Top-Left: UI/UX Design Card (Figma: left: 404px, top: 639px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:block absolute top-[18%] -left-6 sm:-left-12 md:-left-20 lg:-left-24 z-30 pointer-events-auto"
        >
          <UiUxCard />
        </motion.div>

        {/* Top-Right: Learning Progress Card (Figma: left: 842px, top: 651px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:block absolute top-[22%] -right-8 sm:-right-14 md:-right-22 lg:-right-28 z-30 pointer-events-auto"
        >
          <ProgressCard />
        </motion.div>

        {/* Bottom-Left: Happy Students Card (Figma: left: 328px, top: 837px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:block absolute bottom-[14%] -left-10 sm:-left-18 md:-left-28 lg:-left-34 z-30 pointer-events-auto"
        >
          <HappyStudentsCard />
        </motion.div>

        {/* Center Student Figure (Figma: 578px × 541px) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center pointer-events-none select-none"
        >
          <Image
            src="/hero section/center-figure.png"
            alt="ByteSpace Hero Center Figure"
            width={578}
            height={541}
            priority
            className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[530px] lg:max-w-[578px] h-auto object-contain mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVisuals;
