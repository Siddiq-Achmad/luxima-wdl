"use client";

import React from "react";
import { Card, Grid, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

const VendorServices = ({
  services,
}: {
  services: { title: string; description: string }[];
}) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Grid.Container gap={2} justify="center">
        {services.slice(0, 6).map((service, index) => (
          <Grid xs={4} key={index}>
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
          </Grid>
        ))}
      </Grid.Container>
    </motion.div>
  );
};

export default VendorServices;
