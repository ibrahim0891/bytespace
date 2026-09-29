import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logoipusum/Frame.png", alt: "Logoipsum Partner 1" },
  { src: "/logoipusum/Frame-1.png", alt: "Logoipsum Partner 2" },
  { src: "/logoipusum/Frame-2.png", alt: "Logoipsum Partner 3" },
  { src: "/logoipusum/Frame-3.png", alt: "Logoipsum Partner 4" },
];

export const BrandSection = () => {
  return (
    <section className="w-full bg-[#F4F4F6] py-10 sm:py-12 border-y border-zinc-200/70 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
