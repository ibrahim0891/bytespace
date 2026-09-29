"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GridBackground from "@/app/components/GridBackground";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
  };

  return (
    <div className="relative w-full min-h-screen bg-[#003BE2] overflow-x-hidden flex flex-col justify-between font-sans">
      {/* 120px Grid Background */}
      <GridBackground gridSize="120px 120px" opacity={12} lineColor="#FFFFFF" />

      {/* Top Header / Logo */}
      <header className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-10">
        <Link href="/" className="inline-flex items-center gap-2 group cursor-pointer">
          <Image
            src="/bytespace-favicon.png"
            alt="ByteSpace Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>
      </header>

      {/* Main Split Content Area */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-8 sm:py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 my-auto">
        {/* Left Column: Headline & 3D Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-[540px] flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-4"
        >
          {/* Headline & Description */}
          <div className="max-w-[475px]">
            <h2 className="font-semibold text-xl sm:text-[20px] leading-[1.2] tracking-[-0.01em] text-[#F5F5F6]">
              Sign up and come in
            </h2>
            <p className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#F5F5F6] mt-4">
              The registration process is straightforward, uncomplicated, and efficient, allowing
              users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* 3D Showcase Composition Graphic */}
          <div className="relative mt-8 sm:mt-12 w-full max-w-[480px] lg:max-w-[520px] flex justify-center lg:justify-start">
            <Image
              src="/auth-side image.png"
              alt="ByteSpace Courses Showcase"
              width={548}
              height={585}
              className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column: White Register Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[579px] bg-white rounded-[24px] shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-8">
            {/* Title Section */}
            <div className="flex flex-col gap-1.5">
              <span className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#003BE2]">
                Create an Account
              </span>
              <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
                Welcome to ByteSpace
              </h1>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-medium text-[14px] leading-[1.2] text-[#242528]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full h-[52px] px-6 rounded-[12px] bg-white border border-[#E5E6E8] text-[#242528] placeholder:text-[#82868E] text-[16px] sm:text-[18px] font-normal leading-[1.6] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-medium text-[14px] leading-[1.2] text-[#242528]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full h-[52px] px-6 rounded-[12px] bg-white border border-[#E5E6E8] text-[#242528] placeholder:text-[#82868E] text-[16px] sm:text-[18px] font-normal leading-[1.6] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-medium text-[14px] leading-[1.2] text-[#242528]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full h-[52px] px-6 rounded-[12px] bg-white border border-[#E5E6E8] text-[#242528] placeholder:text-[#82868E] text-[16px] sm:text-[18px] font-normal leading-[1.6] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15"
                />
              </div>

              {/* Submit Button (Aligned to the right) */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="h-[46px] px-7 rounded-[24px] bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] font-medium text-[18px] leading-[1.2] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer flex items-center justify-center select-none"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Footer: Login Switch */}
          <div className="pt-10 text-center">
            <span className="font-normal text-[16px] leading-[1.6] text-[#888888]">
              Already have an account?{" "}
            </span>
            <Link
              href="/auth/login"
              className="font-normal text-[16px] leading-[1.6] text-[#003BE2] hover:underline cursor-pointer font-medium"
            >
              Login
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Bottom spacer */}
      <div className="h-6 sm:h-10" />
    </div>
  );
}
