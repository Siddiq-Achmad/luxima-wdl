"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Vendor } from "@/lib/vendorData";

export function VendorCard({
  id,
  slug,
  name,
  category,
  rating,
  reviewCount,
  image,
  location,
  isFeatured,
}: Vendor) {
  return (
    <Link href={`/vendors/${slug}`}>
      <Card className="group rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 min-h-full">
        <CardHeader className="relative h-48 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute top-4 right-4">
            {isFeatured && (
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                Featured
              </span>
            )}
          </div>
        </CardHeader>
        <CardBody className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{category}</p>

          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              ({reviewCount})
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{location}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
