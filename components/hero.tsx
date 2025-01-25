"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1733312742041-7fa9e8b92270')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-zinc-200 inherit">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up"
        >
          Find Your Perfect Wedding Vendors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-xl md:text-2xl mb-12 max-w-2xl animate-fade-up"
        >
          Discover and connect with the finest wedding professionals in your
          area
        </motion.p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.5,
          }}
          className="w-full max-w-2xl animate-fade-up"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for vendors, venues, or services..."
              className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
