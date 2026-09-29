import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2, Paragraph } from "@/app/components/Typography";

export const CtaSection = () => {
  return (
    <section className="relative w-full bg-[#003be2] py-24 sm:py-32 overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "110px 110px",
        }}
      />

      {/* Floating 3D Assets */}
      {/* 1. Top-Left Lime Spiral */}
      <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 pointer-events-none select-none z-0">
        <Image
          src="/hero section/Frame-1.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain -rotate-12"
        />
      </div>

      {/* 2. Top-Left White Spring */}
      <div className="absolute top-6 left-24 sm:top-10 sm:left-48 lg:left-60 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 pointer-events-none select-none z-0">
        <Image
          src="/white-spring.png"
          alt=""
          width={180}
          height={180}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3. Bottom-Left White Cone (pointing up) */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-2 lg:left-4 w-24 sm:w-36 lg:w-44 h-24 sm:h-36 lg:h-44 pointer-events-none select-none z-0">
        <Image
          src="/hero section/Cone-2.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 4. Bottom-Left Lime Torus */}
      <div className="absolute -bottom-16 -left-12 sm:-bottom-24 sm:-left-16 w-56 sm:w-72 lg:w-88 h-56 sm:h-72 lg:h-88 pointer-events-none select-none z-0">
        <Image
          src="/green-torus.png"
          alt=""
          width={360}
          height={360}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 5. Top-Right Lime Pyramid/Cone */}
      <div className="absolute top-6 right-28 sm:top-8 sm:right-56 lg:right-64 w-24 sm:w-40 lg:w-48 h-24 sm:h-40 lg:h-48 pointer-events-none select-none z-0">
        <Image
          src="/Mask Group.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 6. Top-Right White Curved Shape */}
      <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-48 sm:w-72 lg:w-84 h-48 sm:h-72 lg:h-84 pointer-events-none select-none z-0">
        <Image
          src="/hero section/Cone-1.png"
          alt=""
          width={360}
          height={360}
          className="w-full h-full object-contain rotate-12"
        />
      </div>

      {/* 7. Bottom-Right Lime Spiral */}
      <div className="absolute -bottom-14 -right-10 sm:-bottom-20 sm:-right-14 w-48 sm:w-72 lg:w-84 h-48 sm:h-72 lg:h-84 pointer-events-none select-none z-0">
        <Image
          src="/hero section/Frame-1.png"
          alt=""
          width={360}
          height={360}
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <H2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.2]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </H2>

        <Paragraph className="text-white/85 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </Paragraph>

        <div className="pt-2">
          <Link
            href="/auth/register?role=creator"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D4FB20] hover:bg-[#c2ea19] text-zinc-950 font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-md cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

