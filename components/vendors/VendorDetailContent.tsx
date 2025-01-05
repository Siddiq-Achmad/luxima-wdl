"use client";
import { Card, CardBody, CardFooter, Divider, Spacer } from "@nextui-org/react";
import { useVendor } from "@/context/VendorContext";
import VendorReviews from "./VendorReviews";

const VendorDetailContent = () => {
  const { description, services, tags } = useVendor();

  return (
    <Card>
      <CardBody className="m-4">
        <h3>Description</h3>
        <div>{description}</div>
        <Spacer y={1} />
        <h3>Services</h3>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <Spacer y={1} />
        <h3>Tags</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </CardBody>
      <Divider />
      <CardFooter>
        <Spacer y={2} />
      </CardFooter>
    </Card>
  );
};

export default VendorDetailContent;
