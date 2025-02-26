import { useEffect, useState } from "react";
import { fetchUnsplashRandomImages } from "@/lib/unsplash";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Image, Button } from "@heroui/react";

type Image = {
  id: string;
  urls: { regular: string; small: string };
  alt_description: string;
};

const RandomUnsplashImages = ({
  collectionId,
  count,
}: {
  collectionId: string;
  count: number;
}) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      try {
        const data = await fetchUnsplashRandomImages(collectionId, count); // Fetch 5 random images
        setImages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [collectionId]);

  if (loading)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching data Gallery </p>
      </div>
    );

  return (
    <>
      <div className="masonry-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer masonry-item break-inside-avoid overflow-hidden rounded-3xl"
          >
            <Image
              isZoomed
              src={image.urls.small}
              alt={image.alt_description || "Random Unsplash Image"}
              sizes="100%"
              className="w-full h-auto object-cover rounded-3xl transition-transform hover:scale-105"
              onClick={() => openPopup(image.urls.regular)}
            />
          </div>
        ))}
      </div>

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
                <Button color="warning" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RandomUnsplashImages;
