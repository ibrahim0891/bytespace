"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/bytespace-log.png"
                alt="ByteSpace"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              Stay up to date with our latest features, new courses, and creator releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-zinc-300 text-sm focus:outline-none focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20 transition-all bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Browse */}
            <div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider mb-4">Browse</h3>
              <ul className="space-y-3 text-sm text-zinc-600 font-medium">
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

            {/* Column 2: Categories */}
            <div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-3 text-sm text-zinc-600 font-medium">
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

            {/* Column 3: Platform */}
            <div>
              <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wider mb-4">Platform</h3>
              <ul className="space-y-3 text-sm text-zinc-600 font-medium">
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
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900 transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors underline-offset-4 hover:underline">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
