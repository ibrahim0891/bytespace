import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

interface LearningPathItem {
  name: string;
  icon: string;
  href: string;
}

const learningPaths: LearningPathItem[] = [
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
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-12 sm:gap-14 lg:gap-[68px]">
        {/* Frame 9: Header Block (width: 917px, gap: 16px, center aligned) */}
        <div className="w-full max-w-[917px] mx-auto flex flex-col items-center text-center gap-4">
          {/* Heading S: Poppins 600, 36px, 120%, -0.01em, #040819 */}
          <h2 className="w-full max-w-[792px] font-semibold text-2xl sm:text-3xl lg:text-[36px] leading-[1.2] tracking-[-0.01em] text-[#040819]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          {/* Body L: Satoshi 400, 18px, 160%, #82868E */}
          <p className="w-full font-normal text-base sm:text-[18px] leading-[1.6] text-[#82868E]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Frame 10: Category Cards Container (2 columns on mobile, flex wrap on tablet/desktop) */}
        <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-[40px] max-w-[340px] sm:max-w-none mx-auto justify-items-center">
          {learningPaths.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              className="group box-border w-full max-w-[155px] sm:w-[167px] h-[155px] sm:h-[167px] bg-white rounded-[24px] border border-[#CED0D3] hover:border-[#003BE2] hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 p-3 sm:p-4 shrink-0"
            >
              {/* Frame 4: Lime Icon Bubble (60x60, bg #D4FB20, rounded 40px) */}
              <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-[40px] bg-[#D4FB20] flex items-center justify-center p-2.5 sm:p-3 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={path.icon}
                  alt={path.name}
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                />
              </div>

              {/* Label XL: Satoshi 500, 20px, 120%, #242528 */}
              <span className="font-medium text-base sm:text-[20px] leading-[1.2] text-[#242528] text-center tracking-tight group-hover:text-[#003BE2] transition-colors whitespace-nowrap">
                {path.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPathsSection;
