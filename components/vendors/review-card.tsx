import type { ReviewType } from "@/lib/reviewsData";

import React from "react";
import { cn } from "@heroui/react";

import Review from "./review";

export type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType;

const CardReview = React.forwardRef<HTMLDivElement, CardReviewProps>(
  ({ className, ...review }, ref) => (
    <div ref={ref} className={cn("rounded-3xl p-4 shadow-small", className)}>
      <Review {...review} />
    </div>
  )
);

CardReview.displayName = "CardReview";

export default CardReview;
