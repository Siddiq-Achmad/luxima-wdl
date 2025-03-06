import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Spacer,
} from "@heroui/react";

import VendorReviews from "./VendorReviews";
import { motion } from "framer-motion";
import { MapIcon, NotebookPenIcon, RibbonIcon, TagIcon } from "lucide-react";
import VendorGallery from "./VendorGallery";
import { useVendorContext } from "@/context/VendorContext";
import SocialLinks from "../socialLink";

export default function VendorDetailContent() {
  const { vendor } = useVendorContext();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <VendorGallery />
      <Card className="rounded-3xl">
        <CardBody className="my-4 p-8">
          <div className="flex flex-col gap-4 items-start mb-4">
            <div className="relative w-full mb-4">
              <NotebookPenIcon className="absolute top-0 right-0 w-6 h-6 text-primary" />
              <h4 className="font-semibold mb-4  uppercase">Description</h4>
              <div className="font-light text-sm">{vendor?.description}</div>
            </div>
            <Divider className=" mb-6" />
            <div className="relative w-full mb-4">
              <MapIcon className="absolute right-0 top-0 w-6 h-6 text-primary" />
              <h4 className="font-semibold mb-4 uppercase">Office</h4>
              <div className="text-sm font-light">
                <p className="mb-2">Email : {vendor?.contact?.email}</p>
                <p className="mb-2">Contact : {vendor?.contact?.phone}</p>
                <p className="mb-2">
                  Address : {vendor?.address} - {vendor?.location}
                </p>
                {vendor?.contact?.website && (
                  <p className="mb-2">
                    Website :{" "}
                    <Link size="sm" isExternal href={vendor.contact.website}>
                      {vendor?.contact?.website}
                    </Link>
                  </p>
                )}
              </div>
            </div>

            <Divider className=" mb-6" />
            <div className="relative w-full mb-4">
              <RibbonIcon className="absolute right-0 top-0 w-6 h-6 text-primary" />
              <h4 className="font-semibold mb-4 uppercase">Social Media</h4>
              <div className="text-sm font-light flex gap-4">
                {vendor?.social && <SocialLinks social={vendor?.social} />}
              </div>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="px-8">
          <div className="relative w-full">
            <TagIcon className="absolute right-0 top-0 w-6 h-6 text-primary" />
            <h4 className="font-semibold text-medium uppercase">Tags</h4>
            <div className="text-medium font-light">
              {vendor?.tags !== undefined &&
                vendor?.tags.map((tag) => (
                  <a className="text-tiny" key={tag}>
                    #{tag}{" "}
                  </a>
                ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
