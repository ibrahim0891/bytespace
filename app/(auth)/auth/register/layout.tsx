import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Join ByteSpace to access hundreds of premium courses from world-class creators.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
