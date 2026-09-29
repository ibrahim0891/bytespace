"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
  variant?: "light" | "transparent" | "blue";
  cartCount?: number;
}

export const Navbar = ({
  className = "",
  variant = "transparent",
  cartCount = 0,
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "#creators" },
  ];

  const isLight = variant === "light";
  const textColor = isLight ? "text-zinc-700 hover:text-zinc-950" : "text-white/90 hover:text-white";
  const iconColor = isLight ? "text-zinc-800" : "text-white";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full z-50 ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-[120px] flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/bytespace-log.png"
            alt="ByteSpace Logo"
            width={171}
            height={37}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base font-normal transition-all duration-200 transform hover:-translate-y-0.5 leading-[1.6] ${
                link.label === "Home" ? "font-medium leading-[1.2]" : ""
              } ${isLight ? "text-zinc-700 hover:text-zinc-950" : "text-[#F5F5F6]/90 hover:text-[#F5F5F6]"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Action Items */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/auth/login"
            className={`text-base font-normal leading-6 transition-all duration-200 transform hover:-translate-y-0.5 ${
              isLight ? "text-zinc-700 hover:text-zinc-950" : "text-[#F5F5F6]/90 hover:text-[#F5F5F6]"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/auth/login"
            className={`text-base font-normal leading-6 transition-all duration-200 transform hover:-translate-y-0.5 ${
              isLight ? "text-zinc-700 hover:text-zinc-950" : "text-[#F5F5F6]/90 hover:text-[#F5F5F6]"
            }`}
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className={`relative p-1 transition-all duration-200 transform hover:-translate-y-0.5 hover:opacity-80 focus:outline-none cursor-pointer ${
              isLight ? "text-zinc-800" : "text-[#F5F5F6]"
            }`}
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#D4FB20] text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Shopping Cart"
            className={`p-2 ${iconColor}`}
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 focus:outline-none ${iconColor}`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0047D6] border-t border-white/10 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-[#D4FF00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-white hover:text-[#D4FF00]"
            >
              Sign In
            </Link>
            <Link
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-white hover:text-[#D4FF00]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
