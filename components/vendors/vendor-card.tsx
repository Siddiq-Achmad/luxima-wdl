"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Button,
} from "@heroui/react";
import { Vendor } from "@/types/vendor";
import { useVendorContext } from "@/context/VendorContext";

export function VendorCard({
  slug,
  name,
  category,
  rating,
  reviewCount,
  image,
  location,
  isFeatured,
}: Vendor) {
  const { vendors, loading } = useVendorContext();
  return (
    <Link href={`/vendor/${slug}`}>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6 md:col-span-4 rounded-3xl"
      >
        <CardHeader className="absolute z-10 top-1 flex flex-col justify-between items-end">
          <div className="p-2">
            <p className="text-tiny text-white/60 uppercase font-bold text-right">
              {category}
            </p>
            <h2 className="text-white drop-shadow-md text-right font-medium text-2xl">
              {name}
            </h2>
          </div>
          <div className="p-2">
            {isFeatured && (
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                Featured
              </span>
            )}
          </div>
        </CardHeader>
        <Image
          src={image}
          alt={name}
          removeWrapper
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-col items-start p-2">
            <h2 className="font-semibold text-medium uppercase group-hover:text-primary transition-colors">
              {name}
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              {category}
            </p>
          </div>

          <div className="flex flex-col items-end p-2 gap-2">
            <div className="flex items-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm font-light text-muted-foreground px-2">
                ({reviewCount ?? "0"})
              </span>
            </div>

            <p className="text-sm font-light text-muted-foreground">
              {location}
            </p>
          </div>
        </CardFooter>
      </Card>

      {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://heroui.com/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card> */}
    </Link>
  );
}
