"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Service } from "@/lib/serviceData";

const VendorServices = ({ services }: { services: Service[] }) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
    >
      <div className="grid gap-2 grid-cols-3 grid-rows-3 container mx-auto">
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
                  <Card isHoverable>
                    <CardBody>
                      <h4>{service.title}</h4>
                      <small>{service.description}</small>
                    </CardBody>
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
                  <Card isHoverable>
                    <CardBody>
                      <h4>{service.title}</h4>
                      <small>{service.description}</small>
                    </CardBody>
                  </Card>
                </motion.div>
              </div>
            ))}
      </div>
    </motion.div>
  );
};

export default VendorServices;
