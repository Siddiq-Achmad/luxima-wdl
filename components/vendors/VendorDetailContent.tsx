"use client";
import { Card, CardBody, CardFooter, Divider, Spacer } from "@heroui/react";
import { useVendor } from "@/context/VendorContext";
import VendorReviews from "./VendorReviews";
import { motion } from "framer-motion";
import { NotebookPenIcon, TagIcon } from "lucide-react";
import VendorGallery from "./VendorGallery";

const VendorDetailContent = () => {
  const { description, services, tags } = useVendor();
  const vendorName = useVendor().name;

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
    >
      <VendorGallery vendorName={vendorName} />
      <Card>
        <CardBody className="my-4 p-4">
          <NotebookPenIcon className="w-6 h-6" />
          <h3 className="font-semibold text-medium mb-4 p-2 text-right uppercase">
            Description
          </h3>
          <div className="text-muted-foreground">{description}</div>
          <Divider className="my-2 mb-4" />
          <TagIcon className="w-6 h-6 mt-6" />
          <h4 className="font-semibold text-medium mb-4 p-2 text-right uppercase">
            Tags
          </h4>
          <ul className="text-muted-foreground text-right">
            {tags.map((tag, index) => (
              <span className="text-tiny" key={index}>
                {tag}
                {", "}
              </span>
            ))}
          </ul>
        </CardBody>

        <CardFooter>
          <Spacer y={2} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default VendorDetailContent;
