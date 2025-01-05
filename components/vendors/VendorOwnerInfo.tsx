"use client";
import { Card, CardBody, Spacer } from "@nextui-org/react";
import { useVendor } from "@/context/VendorContext";

const VendorOwnerInfo = () => {
  const { owner, contact, workingHours, coordinates } = useVendor();

  return (
    <Card>
      <CardBody>
        <h3>Owner</h3>
        <div>{owner.name}</div>
        <Spacer y={1} />
        <h3>Contact</h3>
        <div>
          Email : {contact.email} | Phone : {contact.phone}
        </div>
        <Spacer y={1} />
        <h3>Opening Hours</h3>
        <p>
          {workingHours.open} - {workingHours.close}
        </p>
        <Spacer y={2} />
        <iframe
          width="100%"
          height="200"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${coordinates.lat},${coordinates.lng}`}
        />
      </CardBody>
    </Card>
  );
};

export default VendorOwnerInfo;
