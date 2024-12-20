import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  date,
  author,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden min-h-full">
        <div className="relative h-60 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
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
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistance(new Date(date), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
