import React from "react";
import Image from "next/image";
import { H2, Paragraph } from "@/app/components/Typography";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

const creatorFeatures = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export const GrowthAndCreatorSection = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Ambient background glow accents */}
            {/* Top-Right Soft Blue/Slate Glow */}
            <div className="absolute -top-16 -right-32 sm:-right-48 w-[400px] sm:w-[550px] h-[480px] sm:h-[650px] bg-[#cbdcfc]/30 rounded-full blur-[130px] pointer-events-none z-0" />

            {/* Middle-Left Subtle Blue Glow */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-32 sm:-left-44 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#dbe8fd]/65 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Bottom-Left Lime/Yellow Glow */}
            <div className="absolute -bottom-32 -left-32 sm:-bottom-0 sm:-left-44 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#D4FB20]/25 rounded-full blur-[60px] pointer-events-none z-0" />

            {/* Bottom-Right Soft Blue/Lavender Glow */}
            <div className="absolute -bottom-32 -right-32 sm:-bottom-44 sm:-right-44 w-[420px] sm:w-[550px] h-[420px] sm:h-[550px] bg-[#b8ccff]/50 rounded-full blur-[80px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-36">
                {/* Block 1: Professional Growth (Text on Left, Image on Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="relative lg:col-span-6 space-y-6 text-left">
                        {/* Glow visually right above the title via Radial Gradient + Blur */}
                        <div
                            className="absolute -top-24 sm:-top-3/4 left-1/4 -translate-x-1/2 w-[340px] sm:w-[460px] h-[260px] sm:h-[340px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none -z-10"
                            style={{
                                background:
                                    "radial-gradient(circle at center, rgba(212, 251, 32, 0.55) 0%, rgba(212, 251, 32, 0.2) 45%, rgba(212, 251, 32, 0) 75%)",
                            }}
                        />

                        <H2 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
                            Your Path to Professional <br className="hidden sm:inline" />
                            Growth Starts Here!
                        </H2>

                        <Paragraph className="text-gray-900 py-6 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </Paragraph>

                        {/* Metrics */}
                        <div className="flex items-center gap-10 sm:gap-14 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-3xl sm:text-4xl font-semibold text-[#003be2] tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-zinc-500 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Image (Frame 11.png) */}
                    <div className="lg:col-span-6 flex justify-center items-center">
                        <div className="relative w-full max-w-[500px]">
                            <Image
                                src="/ByteSpace New Check website (Copy)/Frame 11.png"
                                alt="Your Path to Professional Growth Starts Here"
                                width={600}
                                height={600}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Block 2: Create & Manage Courses (Image on Left, Text on Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Visual Image (Frame 12.png) */}
                    <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
                        <div className="relative w-full max-w-[500px]">
                            <Image
                                src="/ByteSpace New Check website (Copy)/Frame 12.png"
                                alt="Create & Manage Courses Easily"
                                width={600}
                                height={600}
                                priority
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
                        <H2 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
                            Create &amp; Manage <br className="hidden sm:inline" />
                            Courses Easily.
                        </H2>

                        <Paragraph className="text-gray-900 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                            <span className="font-semibold text-zinc-950">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </Paragraph>

                        {/* Checklist Features */}
                        <div className="space-y-3.5 pt-2">
                            {creatorFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#003be2] fill-[#003be2] text-white shrink-0" />
                                    <span className="text-sm sm:text-base font-semibold text-zinc-900">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthAndCreatorSection;
