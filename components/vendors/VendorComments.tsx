"use client";
import { Card, Textarea, Button, CardBody } from "@heroui/react";

const VendorComments = () => {
  return (
    <Card className="mt-6 w-full">
      <CardBody>
        <h3>Comments</h3>
        <Textarea placeholder="Add a comment..." />
        <Button style={{ marginTop: "1rem" }}>Submit</Button>
      </CardBody>
    </Card>
  );
};

export default VendorComments;
