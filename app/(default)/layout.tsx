"use client";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Transition from "@/components/transistion";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Transition>{children}</Transition>
      <Footer />
    </div>
  );
}
