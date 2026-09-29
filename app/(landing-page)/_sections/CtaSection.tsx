import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2, Paragraph } from "@/app/components/Typography";
import GridBackground from "@/app/components/GridBackground";

export const CtaSection = () => {
    return (
        <section className="relative w-full bg-[#003be2] py-24 sm:py-32 overflow-hidden">
            {/* Reusable Full-width Grid Background Pattern */}
            <GridBackground opacity={40} lineColor="rgba(255, 255, 255, 0.25)" />

            {/* Floating 3D Assets positioned across the full section */}
            {/* 1. Top-Left Lime Spiral */}
            <div className="absolute -top-10 sm:-top-16 -left-8 sm:-left-14 w-44 sm:w-60 lg:w-72 h-44 sm:h-60 lg:h-72 pointer-events-none select-none z-0">
                <Image
                    src="/hero section/Frame-1.png"
                    alt=""
                    width={320}
                    height={320}
                    className="w-full h-full object-contain -rotate-12"
                />
            </div>

            {/* 2. Top-Left White Spring (inner left above title) */}
            <div className="absolute top-4 sm:top-6 left-[12%] sm:left-[16%] lg:left-[16%] w-16 sm:w-24 lg:w-44 h-16 sm:h-24 lg:h-44 pointer-events-none select-none z-0">
                <Image
                    src="/white-spring.png"
                    alt=""
                    width={180}
                    height={180}
                    className="w-full h-full object-contain -rotate-12"
                />
            </div>

            {/* 3. Mid-Left White Cone (pointing up along left edge) */}
            <div className="absolute top-[52%] -translate-y-1/2 -left-3 sm:left-0 lg:left-2 w-20 sm:w-28 lg:w-36 h-20 sm:h-28 lg:h-36 pointer-events-none select-none z-0">
                <Image
                    src="/hero section/Cone-2.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* 4. Bottom-Left Lime Torus (bottom left corner) */}
            <div className="absolute -bottom-14 sm:-bottom-35 left-2 sm:left-8 lg:left-12 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none select-none z-0">
                <Image
                    src="/green-torus.png"
                    alt=""
                    width={360}
                    height={360}
                    className="w-full h-full object-contain rotate-6"
                />
            </div>

            {/* 5. Top-Right Lime Pyramid (inner right above title) */}
            <div className="absolute top-4 sm:top-6 right-[12%] sm:right-[16%] lg:right-[18%] w-20 sm:w-44 lg:w-40 h-20 sm:h-32 lg:h-40 pointer-events-none select-none z-0">
                <Image
                    src="/Group 10.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* 6. Top-Right White Cylinder/Shape (top right corner) */}
            <div className="absolute -top-10 sm:top-4 -right-12 sm:-right-30 w-48 sm:w-68 lg:w-80 h-48 sm:h-68 lg:h-80 pointer-events-none select-none z-0">
                <Image
                    src="/Mask Group-1.png"
                    alt=""
                    width={360}
                    height={360}
                    className="w-full h-full object-contain rotate-6"
                />
            </div>

            {/* 7. Bottom-Right Lime Spiral (bottom right corner) */}
            <div className="absolute -bottom-10 sm:-bottom-26 -right-6 sm:-right-10 w-44 sm:w-60 lg:w-76 h-44 sm:h-60 lg:h-76 pointer-events-none select-none z-0">
                <Image
                    src="/hero section/Frame-1.png"
                    alt=""
                    width={360}
                    height={360}
                    className="w-full h-full object-contain -rotate-50"
                />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
                <H2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold   leading-[1.2]">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </H2>

                <Paragraph className="text-white/85 text-base sm:text-lg leading-6 max-w-7xl mx-auto font-normal">
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

