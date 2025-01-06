"use client";
// components/RelatedPosts.tsx
import { BlogProps } from "@/lib/blogData";
import { vendors, Vendor } from "@/lib/vendorData";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

export default function RelatedVendors({ vendors }: { vendors: Vendor[] }) {
  return (
    <div className="w-full mt-6">
      <h4 className="font-semibold text-medium mb-4 px-2 text-right uppercase">
        Related Vendors
      </h4>
      <div className="max-w-lg gap-2 grid grid-cols-12 grid-rows-2">
        {/* {posts.map((post) => (
        <Card key={post.slug} className="my-4">
          <CardBody>
            <Image
              src={post.image}
              alt={post.title}
              width="100%"
              height={200}
            />
            <h5>{post.title}</h5>
            <small>{post.category}</small>
          </CardBody>
        </Card>
      ))} */}
        {vendors.map((vendor) => (
          <Card
            isFooterBlurred
            className="h-40 col-span-12 sm:col-span-6 lg:col-span-4 mb-4"
            key={vendor.slug}
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {vendor.location}
              </p>
              <h4 className=" text-primary hover:text-primary-foreground font-medium text-2xl">
                {vendor.name}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={vendor.name}
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={vendor.image}
            />
            <Link href={`/vendors/${vendor.slug}`} key={vendor.slug}>
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 hover:invert">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-medium text-white/60 uppercase">
                      {vendor.name}
                    </p>
                    <p className="text-tiny text-white/60">{vendor.category}</p>
                  </div>
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
