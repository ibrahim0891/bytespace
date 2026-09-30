"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/app/components/Container";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#ced0d366]">
      <Container className="pt-16 sm:pt-[71px] pb-8 sm:pb-10">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-[92px]">
          {/* Brand & Newsletter Column (Left: 528px) */}
          <div className="w-full lg:max-w-[528px] flex flex-col gap-8 sm:gap-[45px]">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/bytespace-logo-lightmode.png"
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="h-[37px] w-auto object-contain"
                  priority
                />
              </Link>
              
              <p className="text-[#242528] text-[14px] leading-[160%] font-normal max-w-[528px]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            {/* Newsletter Input + Button + Terms */}
            <div className="flex flex-col gap-6 w-full max-w-[504px]">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-[376px] h-[52px] px-6 rounded-[100px] bg-white border border-[#CED0D3] text-[16px] leading-[160%] text-[#242528] placeholder:text-[#242528]/60 focus:outline-none focus:border-zinc-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-[104px] h-[46px] px-6 rounded-[24px] bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] text-[18px] font-medium leading-[120%] transition-transform active:scale-95 cursor-pointer shrink-0 flex items-center justify-center"
                >
                  Search
                </button>
              </form>

              <p className="text-[#242528] text-[12px] leading-[160%] font-normal max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Navigation Links Columns (Right: 580px) */}
          <div className="w-full lg:max-w-[580px] grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-10 lg:self-end">
            {/* Column 1 */}
            <div>
              <ul className="flex flex-col gap-4 text-[14px] leading-[160%] text-[#242528] font-normal">
                <li>
                  <Link href="/search?filter=featured" className="hover:text-black transition-colors">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="hover:text-black transition-colors">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=business" className="hover:text-black transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=it-software" className="hover:text-black transition-colors">
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=design" className="hover:text-black transition-colors">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="flex flex-col gap-4 text-[14px] leading-[160%] text-[#242528] font-normal">
                <li>
                  <Link href="/search?category=development" className="hover:text-black transition-colors">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=marketing" className="hover:text-black transition-colors">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=photography" className="hover:text-black transition-colors">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=finance" className="hover:text-black transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=sport" className="hover:text-black transition-colors">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="flex flex-col gap-4 text-[14px] leading-[160%] text-[#242528] font-normal">
                <li>
                  <Link href="/auth/register?role=creator" className="hover:text-black transition-colors">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-[#CED0D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] leading-[160%] text-[#242528] font-normal">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:underline transition-all">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline transition-all">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline transition-all">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
