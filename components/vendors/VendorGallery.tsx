"use client";

import React, { useEffect, useState } from "react";
import { Modal, ModalBody, Image, Card, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface VendorGalleryProps {
  vendorName: string;
}

const VendorGallery: React.FC<VendorGalleryProps> = ({ vendorName }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [visible, setVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  const openModal = (image: string) => {
    setActiveImage(image);
    setVisible(true);
  };

  const closeModal = () => {
    setActiveImage(null);
    setVisible(false);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: vendorName,
              per_page: 10,
            },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        const fetchedImages = response.data.results.map(
          (img: any) => img.urls.small
        );
        setImages(fetchedImages);
      } catch (err) {
        setError("Gagal memuat gambar dari Unsplash");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [vendorName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container gap-2 mb-4 flex">
        <Swiper
          navigation={true}
          className="gallery-slider"
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="title text-center">Image {index + 1}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <Modal open={visible} onClose={closeModal} closeButton>
        <ModalBody>
          {activeImage && (
            <Image
              src={activeImage}
              alt="Active Portfolio Image"
              objectFit="contain"
            />
          )}
        </ModalBody>
      </Modal> */}
    </div>
  );
};

export default VendorGallery;
