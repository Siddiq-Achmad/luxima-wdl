"use client";
import {
  Card,
  Spacer,
  CardBody,
  CardHeader,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useVendor } from "@/context/VendorContext";
import { motion } from "framer-motion";

const VendorDetailHeader = () => {
  const { name, category, rating, reviewCount, location } = useVendor();

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="container mx-auto w-full "
    >
      <Card
        isFooterBlurred
        className="border-none w-full h-[300px] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-300 dark:from-slate-900 dark:via-gray-950 dark:to-slate-900"
        radius="lg"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-primary dark:text-default-400 uppercase text-lg">
            {category}
          </h4>
          <p className="text-tiny text-default-400 dark:text-default-200 uppercase font-bold">
            {location}
          </p>
        </CardHeader>
        <CardBody className="text-center justify-center items-center">
          <h1 className="font-semibold text-4xl py-4 uppercase text-primary dark:text-gray-300">
            {name}
          </h1>
          <h3 className="font-medium text-medium mb-4 text-gray-500 dark:text-gray-400  ">
            {category}
          </h3>
          <div className="text-gray-300 ">
            Rating: {rating} ({reviewCount} reviews)
          </div>
          <div className="text-gray-300 ">Location: {location}</div>
        </CardBody>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default VendorDetailHeader;
