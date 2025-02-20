"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { useBlogContext } from "@/context/BlogContext";
import { Blog } from "@/types/blog";

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  category,
  date,
  author,
}: Blog) {
  //const { setSelectedBlog } = useBlogContext();
  const { blogs, loading } = useBlogContext();
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      // onClick={() => setSelectedBlog(slug)}
    >
      <Card className=" rounded-lg shadow-md overflow-hidden group min-h-full rounded-3xl">
        <CardHeader className="relative w-full h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            priority
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </CardHeader>
        <CardBody className="p-6 flex justify-between">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors dark:text-gray-400 line-clamp-3">
            {title}
          </h2>
          <p className="text-sm mb-4 dark:text-gray-400 line-clamp-5">
            {excerpt}
          </p>
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={author && (author.avatar as string)}
                alt={author && author.name}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium dark:text-gray-400">
                {author.name}
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                {/* {formatDistance(new Date(date), new Date(), {
                  addSuffix: true,
                })} */}
                {date}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
