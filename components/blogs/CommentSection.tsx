"use client";
// components/CommentSection.tsx
import { Card, Textarea, Button, CardBody } from "@nextui-org/react";

export default function CommentSection() {
  return (
    <Card className="mt-6">
      <CardBody>
        <Textarea placeholder="Write a comment..." fullWidth />
        <Button className="mt-4">Submit</Button>
      </CardBody>
    </Card>
  );
}
