"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GridBackground from "@/app/components/GridBackground";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
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
              Sign in with ease
            </h2>
            <p className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#F5F5F6] mt-4">
              Experience a seamless and efficient sign-in process that grants you instant access to a
              world of knowledge.
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

        {/* Right Column: White Login Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[579px] bg-white rounded-[24px] shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-10">
            {/* Title Section */}
            <div className="flex flex-col gap-1.5">
              <span className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#003BE2]">
                Sign In
              </span>
              <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
                Welcome Back
              </h1>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="h-[46px] px-6 rounded-[24px] bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] font-medium text-[18px] leading-[1.2] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer flex items-center justify-center select-none"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Logins Section */}
            <div className="flex flex-col items-center gap-6">
              {/* Divider */}
              <div className="w-full flex items-center justify-center gap-3">
                <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
                <span className="font-normal text-[18px] leading-[1.6] text-[#888888] px-2">
                  or
                </span>
                <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] hover:border-zinc-400 bg-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                >
                  <svg
                    className="w-6 h-6 text-black fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] hover:border-zinc-400 bg-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                >
                  <svg
                    className="w-6 h-6 text-black fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer: Sign Up Switch */}
          <div className="pt-8 text-center">
            <span className="font-normal text-[16px] leading-[1.6] text-[#888888]">
              New user?{" "}
            </span>
            <Link
              href="/auth/register"
              className="font-normal text-[16px] leading-[1.6] text-[#003BE2] hover:underline cursor-pointer"
            >
              Create an account
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Bottom spacer */}
      <div className="h-6 sm:h-10" />
    </div>
  );
}