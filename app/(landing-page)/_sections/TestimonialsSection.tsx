import React from "react";
import Image from "next/image";
import { H2, Paragraph } from "@/app/components/Typography";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        quote:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        quote:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        quote:
            '"As a creator, ByteSpace has been a total game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="w-full bg-white py-20 lg:py-32 relative overflow-hidden">
            {/* 3 Ambient Background Glows matching Figma design via Radial Gradient + Layer Blur */}
            {/* 1. Top-Center Lime Glow */}
            <div
                className="absolute -top-32 sm:-top-30 left-1/2 -translate-x-1/2 w-[480px] sm:w-[680px] h-[360px] sm:h-[480px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(212, 251, 32, 0.6) 0%, rgba(212, 251, 32, 0.25) 45%, rgba(212, 251, 32, 0) 75%)",
                }}
            />

            {/* 2. Left Soft Blue Glow */}
            <div
                className="absolute -bottom-24 sm:-bottom-36 -left-28 sm:-left-40 w-[460px] sm:w-[650px] h-[460px] sm:h-[650px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(184, 208, 255, 0.85) 0%, rgba(203, 220, 252, 0.45) 45%, rgba(203, 220, 252, 0) 75%)",
                }}
            />

            {/* 3. Right Lime Glow */}
            <div
                className="absolute top-1/4 sm:top-1/4 -right-28 sm:-right-70 w-[460px] sm:w-[650px] h-[460px] sm:h-[650px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(212, 251, 32, 0.55) 0%, rgba(212, 251, 32, 0.2) 45%, rgba(212, 251, 32, 0) 75%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
                {/* Header: 2 Columns (Title on left, Description on right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-6">
                        <H2 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </H2>
                    </div>
                    <div className="lg:col-span-6">
                        <Paragraph className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                        </Paragraph>
                    </div>
                </div>

                {/* Testimonials 3-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white rounded-[28px] sm:rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                        >
                            {/* Avatar */}
                            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 mb-6">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name & Role */}
                            <div className="space-y-1 mb-5">
                                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                                    {t.name}
                                </h3>
                                <p className="text-xs sm:text-sm font-semibold text-[#003be2]">
                                    {t.role}
                                </p>
                            </div>

                            {/* Quote */}
                            <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed flex-1">
                                {t.quote}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

