"use client";

import React, { useEffect, useState } from "react";
import { Blog } from "@/types/blog";

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
} from "@heroui/react";
import { useBlogContext } from "@/context/BlogContext";
import { AcmeIcon, Logo } from "../icons";
import AuthorInfo from "@/components/blogs/AuthorInfo";
import CommentSection from "@/components/blogs/BlogComments";
import LatestPosts from "@/components/blogs/LatestPosts";
import RelatedVendors from "@/components/blogs/RelatedVendors";
import { getRelatedVendors } from "@/utils/getRelatedVendors";
import NavigationButtons from "@/components/blogs/NavigationButtons";

import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import moment from "moment";
import { Icon } from "@iconify/react";

export default function BlogDetailPage({ slug }: { slug: string }) {
  const { blog, previous, next, loading, fetchBlogDetail } = useBlogContext();

  // console.log("Next : ", next);
  // console.log("Previous : ", previous);
  useEffect(() => {
    fetchBlogDetail(slug);
  }, [slug]);

  if (loading)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching blog data </p>
      </div>
    );
  if (!blog)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Blog not found</p>
      </div>
    );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        {/* Kolom Kiri */}
        <div className="w-full lg:w-2/3">
          <Card className="overflow-none relative w-full border-small border-foreground/10  bg-right-bottom">
            <CardHeader className="bg-background/70  bg-gradient-to-bl from-orange-200 from-0% via-violet-100 via-50% to-pink-100 to-100%">
              <div className="flex items-center gap-6 p-4 justify-between w-full">
                <h2 className="text-2xl font-semibold hover:text-primary overflow-clip w-full lg:w-10/12">
                  {blog.title}
                </h2>
                <div className="hidden lg:flex flex-col items-end justify-center gap-2 lg:w-2/12  ">
                  <Logo className="w-12 h-12" />
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
              <div className="p-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover rounded-3xl mb-4"
                />
                <small className="font-light">{blog.excerpt}</small>
                <div className="my-4">
                  <p className="text-medium font-light">{blog.content}</p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-white/30 bottom-0 border-t-1 border-zinc-100/50">
              <div className="p-4 flex flex-col md:flex-row gap-2 justify-between md:items-center w-full h-full">
                <div className="flex items-center gap-2">
                  <Avatar src={blog.author.avatar} />
                  <div>
                    <h4 className="text-small text-primary">
                      {blog.author.name}
                    </h4>
                    <p className="text-tiny font-light">{blog.author.email}</p>
                  </div>
                </div>
                <div className="flex flex-col md:justify-center md:items-center">
                  <p className="text-tiny">
                    {blog.tags.length > 0
                      ? blog.tags.map((tag) => `#${tag} `)
                      : "#undifined"}
                  </p>
                  <p className="text-tiny">
                    {moment(blog.date, "DD-MM-YYYY HH:mm").format(
                      "dddd, DD MMMM YYYY - HH:mm"
                    )}{" "}
                  </p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  {blog.category}
                </Button>
              </div>
            </CardFooter>
          </Card>
          <NavigationButtons previous={previous} next={next} />
          <CommentSection />
        </div>

        {/* Kolom Kanan */}
        <div className="w-full lg:w-1/3">
          <AuthorInfo author={blog.author} />
          <RelatedVendors vendors={getRelatedVendors(blog.tags)} />
          <LatestPosts />
        </div>
      </div>
    </div>
  );
}
