import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useVendorContext } from "@/context/VendorContext";
import { Service } from "@/types/service";

interface ServicesListProps {
  services: Service[];
}

export default function VendorServices({ services }: ServicesListProps) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
    >
      <div className="grid gap-2  md:grid-cols-4 grid-rows-3 container mx-auto">
        {services.length > 9
          ? services.slice(0, 9).map((service, index) => (
              <div className="grid" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    cursor: "pointer",
                    borderRadius: "12px",
                  }}
                >
                  <Card isFooterBlurred shadow="sm" className="rounded-xl">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        {service.price} / {service.unit}
                      </p>
                      <h4 className="text-white/60 font-medium text-xl">
                        {service.title}
                      </h4>
                    </CardHeader>
                    <Image
                      removeWrapper
                      alt={service.title}
                      className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                      src={service.image}
                    />

                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-black text-tiny text-left">
                          {service.title}
                        </p>
                        <p className="text-black text-tiny text-left">
                          Per {service.unit} {service.price}
                        </p>
                      </div>
                      <Button
                        className="text-tiny"
                        color="primary"
                        radius="full"
                        size="sm"
                      >
                        Order
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            ))
          : services.map((service, index) => (
              <div className="grid" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    cursor: "pointer",
                    borderRadius: "12px",
                  }}
                >
                  <Card isFooterBlurred shadow="sm" className="rounded-xl">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <p className="text-tiny text-white/60 uppercase font-bold">
                        {service.price} / {service.unit}
                      </p>
                      <h4 className="text-white/60 font-medium text-xl">
                        {service.title}
                      </h4>
                    </CardHeader>
                    <Image
                      removeWrapper
                      alt={service.title}
                      className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                      src={service.image}
                    />

                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                      <div>
                        <p className="text-black text-tiny text-left">
                          {service.title}
                        </p>
                        <p className="text-black text-tiny text-left">
                          Per {service.unit} {service.price}
                        </p>
                      </div>
                      <div>
                        <Button
                          className="text-tiny"
                          color="primary"
                          radius="full"
                          size="sm"
                        >
                          Order
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            ))}
      </div>
    </motion.div>
  );
}
