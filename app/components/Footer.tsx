"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-36">
          {/* Brand & Newsletter Column (Left) */}
          <div className="lg:col-span-6 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/bytespace-logo-lightmode.png"
                alt="ByteSpace"
                width={160}
                height={42}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            
            <p className="text-sm sm:text-base text-zinc-700 max-w-lg leading-relaxed font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Button */}
            <form onSubmit={(e) => e.preventDefault()} className="pt-2 max-w-lg">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-6 py-3.5 rounded-full border border-zinc-300 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-[#D4FB20]/50 transition-all bg-white"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4FB20] hover:bg-[#c4eb00] text-zinc-950 font-semibold text-sm sm:text-base transition-transform active:scale-95 cursor-pointer shadow-sm shrink-0"
                >
                  Search
                </button>
              </div>
              <p className="text-xs text-zinc-500 max-w-md mt-8 leading-relaxed font-normal">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Navigation Links Columns (Right) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
            {/* Column 1 */}
            <div>
              <ul className="space-y-4 text-sm sm:text-base text-zinc-800 font-normal">
                <li>
                  <Link href="/search?filter=featured" className="hover:text-zinc-950 transition-colors">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="hover:text-zinc-950 transition-colors">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=business" className="hover:text-zinc-950 transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=it-software" className="hover:text-zinc-950 transition-colors">
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=design" className="hover:text-zinc-950 transition-colors">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-4 text-sm sm:text-base text-zinc-800 font-normal">
                <li>
                  <Link href="/search?category=development" className="hover:text-zinc-950 transition-colors">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=marketing" className="hover:text-zinc-950 transition-colors">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=photography" className="hover:text-zinc-950 transition-colors">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=finance" className="hover:text-zinc-950 transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/search?category=sport" className="hover:text-zinc-950 transition-colors">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-4 text-sm sm:text-base text-zinc-800 font-normal">
                <li>
                  <Link href="/auth/register?role=creator" className="hover:text-zinc-950 transition-colors">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-950 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500 font-normal">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-zinc-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-800 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
