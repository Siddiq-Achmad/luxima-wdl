"use client";
import { title } from "@/components/primitives";
import React, { useState, useEffect } from "react";
import { fetchUnsplashImages } from "@/lib/unsplash";
import { Image, Button } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { motion } from "framer-motion";

export default function GalleryPage() {
  //const [query, setQuery] = useState("wedding");
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openPopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    onOpen();
  };

  const closePopup = () => {
    setSelectedImage(null);
    onOpen();
  };

  // Fetch images when query changes
  useEffect(() => {
    const fetchData = async () => {
      const query = "wedding";
      const data = await fetchUnsplashImages(query);
      setImages(data.results);
    };
    fetchData();
  }, []);

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

      <section className="py-16 max-w-6xl mx-auto">
        {/* Grid of Images */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="cursor-pointer">
              <Image
                isZoomed
                src={image.urls.small}
                alt={image.alt_description || "Unsplash Image"}
                className="rounded-lg"
                onClick={() => openPopup(image.urls.regular)}
              />
            </div>
          ))}
        </div>

        {/* Popup Modal */}

        <Modal
          backdrop="blur"
          size="2xl"
          classNames={{
            backdrop:
              "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
          }}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Gallery Image
                </ModalHeader>
                <ModalBody>
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt="Selected Image"
                      className="rounded-lg w-full h-full"
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}
