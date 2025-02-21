"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { useBlogContext } from "@/context/BlogContext";
import { Blog } from "@/types/blog";
import moment from "moment";
import { RoundArrowOutward } from "../icons";

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
      <Card className="shadow-md overflow-hidden group min-h-full rounded-3xl">
        <CardHeader className="relative w-full h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100%"
            priority
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </CardHeader>
        <CardBody className="px-6 flex justify-between">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors dark:text-gray-400 line-clamp-3">
            {title}
          </h2>
          <p className="text-sm dark:text-gray-400 line-clamp-3">{excerpt}</p>
        </CardBody>
        <CardFooter className="px-6 flex justify-between items-center ">
          <div className="relative w-10 h-10 overflow-hidden rounded-full p-4">
            <Image
              src={author && (author.avatar as string)}
              alt={author && author.name}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="w-full pl-4">
            <p className="text-sm font-medium dark:text-gray-400">
              {author.name}{" "}
              <span className="text-xs capitalize font-light">
                | {author.roles && author.roles[0]}
              </span>{" "}
            </p>
            <p className="text-xs text-muted-foreground dark:text-gray-400"></p>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              {moment(date, "DD-MM-YYYY HH:mm").format(
                "HH:mm - ddd, DD MMMM YYYY"
              )}{" "}
            </p>
          </div>
          <Button
            radius="full"
            variant="ghost"
            color="primary"
            isIconOnly
            endContent={<RoundArrowOutward />}
          />
        </CardFooter>
      </Card>
    </Link>
  );
}
