"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className={`w-full z-50 ${className}`.trim()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/bytespace-log.png"
              alt="ByteSpace Logo"
              width={140}
              height={36}
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/auth/login"
              className={`text-sm font-medium transition-colors ${textColor}`}
            >
              Sign In
            </Link>
            <Link
              href="/auth/login"
              className={`text-sm font-medium transition-colors ${textColor}`}
            >
              Join Us
            </Link>
            <button
              type="button"
              aria-label="Shopping Cart"
              className={`relative p-2 transition-opacity hover:opacity-80 focus:outline-none ${iconColor}`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4FF00] text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
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
    </header>
  );
};

export default Navbar;
