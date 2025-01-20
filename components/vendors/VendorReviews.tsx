"use client";

import React from "react";
import { Button, useDisclosure } from "@heroui/react";
import { Icon } from "@iconify/react";

import CardReview from "./review-card";
import { ReviewType } from "@/lib/reviewsData";
import ModalReview from "./modal-review";

interface VendorReviewsProps {
  reviews: ReviewType[];
}

export default function Component({ reviews }: VendorReviewsProps) {
  // Remove the defaultOpen property from useDisclosure when using the component
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure({
    defaultOpen: false,
  });

  return (
    <div>
      <header className="mb-8 flex flex-wrap justify-between gap-4 md:px-2">
        <div className="flex items-center gap-2">
          <h1 className="text-medium font-semibold md:text-large">Reviews</h1>
          <div className="flex items-center gap-1">
            <Icon
              className="text-warning-500"
              icon="solar:star-bold"
              width={20}
            />
            <span className="text-medium font-semibold md:text-large">4.4</span>
            <span className="text-right text-small text-default-500 lg:text-medium">
              (Based on {reviews.length} reviews)
            </span>
          </div>
        </div>
        <Button
          endContent={<Icon icon="solar:pen-linear" />}
          variant="bordered"
          onPress={onOpen}
        >
          Write a review
        </Button>
      </header>
      <div className="flex flex-col gap-4">
        {reviews.map((r) => (
          <CardReview
            key={r.idRev}
            content={r.content}
            createdAt={r.createdAt}
            rating={r.rating}
            title={r.title}
            user={r.user}
            vendorId={r.vendorId}
            idRev={r.idRev}
          />
        ))}
      </div>
      <ModalReview
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
