"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowUp } from "./icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk memantau scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk menggulir ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={isVisible ? "visible" : "hidden"}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`z-[1000] right-6 bottom-6 fixed`} // Ubah posisi tombol
      >
        <Button
          onPress={scrollToTop}
          isIconOnly
          color="primary"
          aria-label="BackToTop"
          radius="full"
          className="flex justify-center items-center text-white text-lg font-semibold"
        >
          <ArrowUp />
        </Button>
      </motion.div>
    </div>
  );
};

export default BackToTop;
