// utils/getReviewsByVendor.ts
import { reviews } from "@/lib/reviewsData";

export const getReviewsByVendor = (vendorId: number) => {
  return reviews.filter((review) => review.vendorId === vendorId);
};