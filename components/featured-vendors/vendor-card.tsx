"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  image: string;
  location: string;
}

export function VendorCard({
  id,
  name,
  category,
  rating,
  reviewCount,
  image,
  location,
}: VendorCardProps) {
  return (
    <Link href={`/vendors/${id}`}>
      <div className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 min-h-full">
        <div className="relative h-48 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4">
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
        </div>
      </div>
    </Link>
  );
}
