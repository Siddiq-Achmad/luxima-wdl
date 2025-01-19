"use client";
// components/RelatedPosts.tsx
import { useBlogContext } from "@/context/BlogContext";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  LinkIcon,
} from "@nextui-org/react";
import { StorybookIcon } from "../icons";

export default function LatestPosts() {
  const { blogs, isLoading } = useBlogContext();

  if (isLoading)
    return (
      <div className=" p-8 w-full h-60 mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching blog data </p>
      </div>
    );
  if (!blogs)
    return (
      <div className=" p-8 w-full h-60 mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Blog not found</p>
      </div>
    );
  return (
    <div className="mt-6 w-full mb-2">
      <h4 className="font-semibold text-medium mb-4 px-2 text-right uppercase">
        Latest Posts
      </h4>
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
      {blogs.length >= 3
        ? blogs.slice(-3).map((post) => (
            <Card
              isFooterBlurred
              className="w-full h-60 col-span-12 sm:col-span-5 mb-4"
              key={post.slug}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {post.category}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-gray-200 hover:text-primary font-medium text-2xl">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-tiny text-white/60 mt-4 justify-between">
                  {post.excerpt}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={post.title}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={post.image}
              />

              <Link href={`/blog/${post.slug}`} className="h-full w-full">
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-medium">{post.title}</p>
                    <p className="text-black text-tiny">{post.category}</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    more ...
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))
        : blogs.map((post) => (
            <Card
              isFooterBlurred
              className="w-full h-60 col-span-12 sm:col-span-5"
              key={post.slug}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {post.category}
                </p>
                <h4 className="text-gray-200 hover:text-primary font-medium text-2xl">
                  {post.title}
                </h4>
                <p className="text-tiny text-white/60 mt-4 justify-between">
                  {post.excerpt}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={post.title}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={post.image}
              />

              <Link href={`/blog/${post.slug}`} className="h-full w-full">
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-medium">{post.title}</p>
                    <p className="text-black text-tiny">{post.category}</p>
                  </div>
                  <Button
                    className="text-tiny"
                    color="primary"
                    radius="full"
                    size="sm"
                  >
                    Read more ...
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))}
    </div>
  );
}
