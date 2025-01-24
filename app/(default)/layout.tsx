"use client";
import { BlogProvider } from "@/context/BlogContext";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import BackToTop from "@/components/BackToTop";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      <BackToTop />
      <Footer />
    </div>
  );
}
