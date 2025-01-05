"use client";

import React, { useState } from "react";
import { Modal, ModalBody, Image, Grid } from "@nextui-org/react";
import { motion } from "framer-motion";

const VendorGallery = ({ images }: { images: string[] }) => {
  const [visible, setVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setActiveImage(image);
    setVisible(true);
  };

  const closeModal = () => {
    setActiveImage(null);
    setVisible(false);
  };

  return (
    <div>
      <Grid.Container gap={2} justify="center">
        {images.map((image, index) => (
          <Grid xs={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openModal(image)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <Image
                src={image}
                alt={`Portfolio ${index + 1}`}
                objectFit="cover"
                height={150}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid.Container>

      <Modal open={visible} onClose={closeModal} closeButton>
        <ModalBody>
          {activeImage && (
            <Image
              src={activeImage}
              alt="Active Portfolio Image"
              objectFit="contain"
            />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VendorGallery;
