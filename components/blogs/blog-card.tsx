"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogProps } from "@/lib/blogData";
import { formatDistance } from "date-fns";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useBlogContext } from "@/context/BlogContext";

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  category,
  date,
  author,
}: BlogProps) {
  const { setSelectedBlog } = useBlogContext();
  return (
    <Link
      key={slug}
      href={`/blog/${slug}`}
      onClick={() => setSelectedBlog(slug)}
    >
      <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group min-h-full">
        <CardHeader className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </CardHeader>
        <CardBody className="p-6">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors dark:text-gray-400">
            {title}
          </h2>
          <p className="text-md mb-4 dark:text-gray-400">{excerpt}</p>
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium dark:text-gray-400">
                {author.name}
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                {formatDistance(new Date(date), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
