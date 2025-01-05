"use client";
import { Card, Spacer, CardBody } from "@nextui-org/react";
import { useVendor } from "@/context/VendorContext";

const VendorDetailHeader = () => {
  const { name, category, rating, reviewCount, location } = useVendor();

  return (
    <Card>
      <CardBody>
        <h1>{name}</h1>
        <h3>{category}</h3>
        <div>
          Rating: {rating} ({reviewCount} reviews)
        </div>
        <div>Location: {location}</div>
      </CardBody>
    </Card>
  );
};

export default VendorDetailHeader;
