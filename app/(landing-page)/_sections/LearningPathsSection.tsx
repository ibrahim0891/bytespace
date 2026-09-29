import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2, Paragraph } from "@/app/components/Typography";

const learningPaths = [
    {
        name: "Design",
        icon: "/logoipusum/icons/Frame.svg",
        href: "/search?category=design",
    },
    {
        name: "Development",
        icon: "/logoipusum/icons/Style=Filled.svg",
        href: "/search?category=development",
    },
    {
        name: "IT & Software",
        icon: "/logoipusum/icons/Style=Filled-1.svg",
        href: "/search?category=it-software",
    },
    {
        name: "Business",
        icon: "/logoipusum/icons/Style=Round.svg",
        href: "/search?category=business",
    },
    {
        name: "Marketing",
        icon: "/logoipusum/icons/Style=Outlined.svg",
        href: "/search?category=marketing",
    },
    {
        name: "Photography",
        icon: "/logoipusum/icons/Style=Outlined-1.svg",
        href: "/search?category=photography",
    },
];

export const LearningPathsSection = () => {
    return (
        <section className="w-full bg-white py-10 sm:pb-15 sm:pt-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Heading */}
                <H2 className="text-zinc-950 text-2xl sm:text-3xl md:text-4xl font-extrabold  ">
                    Explore Diverse Learning Paths at Bytespace
                </H2>

                {/* Section Subtitle */}
                <Paragraph className="text-gray-900 text-sm sm:text-base max-w-5xl mx-auto mt-4 leading-relaxed">
                    At Bytespace, we believe in empowering individuals through
                    knowledge. Our diverse range of courses spans various
                    fields, ensuring there&apos;s something for everyone.
                    Unleash your potential and explore our carefully curated
                    categories.
                </Paragraph>

                {/* Learning Path Cards Grid */}
                <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                    {learningPaths.map((path) => (
                        <Link
                            key={path.name}
                            href={path.href}
                            className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-300 p-6 flex flex-col items-center justify-center text-center transition-colors select-none"
                        >
                            {/* Lime Icon Circle */}
                            <div className="w-14 h-14 rounded-full bg-[#D4FF00] flex items-center justify-center shrink-0 transition-opacity group-hover:opacity-90">
                                <Image
                                    src={path.icon}
                                    alt={path.name}
                                    width={28}
                                    height={28}
                                    className="w-7 h-7 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-4 group-hover:text-blue-600 transition-colors">
                                {path.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningPathsSection;
