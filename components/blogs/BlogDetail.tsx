"use client";

import React from "react";
import { BlogProps } from "@/lib/blogData";

import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  type CardProps,
} from "@nextui-org/react";
import { useBlogContext } from "@/context/BlogContext";
import { AcmeIcon } from "../icons";

interface BlogDetailProps {
  blog: BlogProps;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  const { selectedBlog } = useBlogContext();
  return (
    <Card className="overflow-none relative w-full border-small border-foreground/10  bg-right-bottom ">
      <CardHeader className="bg-background/70 text-gary-400 dark:text-gray-200 bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 dark:from-slate-900 dark:via-gray-950 dark:to-slate-900">
        <div className="flex items-center gap-6 p-4 justify-between w-full">
          <h2 className="text-2xl font-semibold hover:text-primary overflow-clip w-full lg:w-10/12">
            {blog.title}
          </h2>
          <div className="hidden lg:flex flex-col items-end justify-center gap-2 lg:w-2/12  ">
            <Avatar src={blog.author.avatar} />
            <p className="text-small text-primary">{blog.author.name}</p>
          </div>
        </div>
      </CardHeader>

      {/* <CardBody className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium text-white/80">
            Learn from the best
          </p>
          <p className="text-small text-white/60">
            Unlock the full power of Acme! Gain expertise and insights from top
            organizations through guided tutorials, boosting productivity,
            enhancing security, and enabling seamless collaboration.
          </p>
        </div>
      </CardBody> */}
      <CardBody>
        <Image src={blog.image} alt={blog.title} width="100%" height={400} />
        <div className="p-4">
          <small color="gray">{blog.excerpt}</small>
          <div className="my-4">
            <p className="text-medium font-light">{blog.content}</p>
          </div>
        </div>
      </CardBody>
      <CardFooter className="bg-white/30 bottom-0 border-t-1 border-zinc-100/50 justify-between">
        <div className="px-4">
          <p className="text-tiny">
            {blog.tags.length > 0
              ? blog.tags.map((tag) => `#${tag} `)
              : "#undifined"}
          </p>
          <p className="text-tiny">{blog.date}</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          {blog.category}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogDetail;
