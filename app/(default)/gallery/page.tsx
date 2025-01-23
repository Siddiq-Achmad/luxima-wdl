"use client";
import { title } from "@/components/primitives";

import { motion } from "framer-motion";
import RandomUnsplashImages from "./RandomUnsplashImages";

export default function GalleryPage() {
  return (
    <div className="pt-16 ">
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className={`${title()} text-4xl font-bold mb-4`}>Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Discover a collection of stunning wedding photos from around the
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.5,
          }}
          className="container mx-auto px-4"
        >
          <RandomUnsplashImages collectionId="we1aS2RZQuM" count={12} />
        </motion.div>
      </section>
    </div>
  );
}
