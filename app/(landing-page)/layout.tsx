import React from "react";
import Navbar from "@/app/components/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0055FF]">
       
      <main className="flex-1">{children}</main>
    </div>
  );
}