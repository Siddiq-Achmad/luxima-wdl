"use client";

import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import CardReview from "./review-card";
import { reviews, ReviewType } from "@/lib/reviewsData";
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
        {reviews.map((review) => (
          <CardReview
            key={review.id}
            content={review.content}
            createdAt={review.createdAt}
            rating={review.rating}
            title={review.title}
            user={review.user}
            vendorId={review.vendorId}
            id={review.id}
          />
        ))}
        {/* <CardReview
          content="Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium. "
          createdAt="2021-08-01T12:00:00.000Z"
          rating={5}
          title="Great product"
          user={{
            name: "John Doe",
            email: "cH2Ow@example.com",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
          }}
          vendorId={1}
          id={undefined}
        /> */}
      </div>
      <ModalReview
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
