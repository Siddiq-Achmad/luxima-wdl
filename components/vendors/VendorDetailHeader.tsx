import { useVendorContext } from "@/context/VendorContext";
import {
  Card,
  Spacer,
  CardBody,
  CardHeader,
  Image,
  CardFooter,
  Button,
} from "@heroui/react";

import { motion } from "framer-motion";

export default function VendorDetailHeader() {
  const { vendor } = useVendorContext();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mx-auto w-full px-4 "
    >
      <Card
        isFooterBlurred
        className="border-none w-full h-[260px] bg-gradient-to-bl from-orange-200 from-0% via-violet-100 via-50% to-pink-100 to-100% dark:from-slate-900 dark:via-gray-950 dark:to-slate-900 rounded-3xl"
        radius="lg"
        shadow="sm"
      >
        <CardHeader className="absolute z-20 top-1 flex-col items-start">
          <h4 className="text-primary dark:text-default-400 uppercase text-lg">
            {vendor?.name}
          </h4>
          <p className="text-tiny text-default-400 dark:text-default-200 uppercase font-bold">
            {vendor?.location}
          </p>
        </CardHeader>
        {vendor?.image && (
          <Image
            src={vendor?.image}
            alt={vendor?.name}
            className="object-cover"
            width={"100%"}
            height={280}
          />
        )}
        <CardBody className="absolute z-10 top-10 text-center justify-center items-center">
          <h1 className="font-semibold text-2xl md:text-4xl py-4 uppercase text-primary dark:text-gray-300">
            {vendor?.name}
          </h1>
          <p className="font-medium text-white/60 dark:text-white/40  ">
            {vendor?.category}
          </p>

          <p className="font-light text-md text-white/60 dark:text-white/40  ">
            {vendor?.address}
          </p>
        </CardBody>

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">
              Rating: {vendor?.rating} ({vendor?.reviewCount} reviews)
            </p>
            <p className="text-black text-tiny">
              Tags: {(vendor?.tags && vendor.tags.join(", ")) || "No tags"}
            </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
