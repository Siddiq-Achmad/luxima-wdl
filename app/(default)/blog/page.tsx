import { title } from "@/components/primitives";

import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";

const BLOG_POSTS = [
  {
    slug: "wedding-trends-2024",
    title: "2024 Wedding Trends You Need to Know",
    excerpt:
      "Discover the latest trends shaping modern weddings, from sustainable celebrations to tech-integrated ceremonies.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    category: "Trends",
    date: "2024-03-15",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    slug: "choosing-perfect-venue",
    title: "How to Choose Your Perfect Wedding Venue",
    excerpt:
      "Expert tips on selecting the ideal wedding venue that matches your style, budget, and guest list.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    category: "Planning",
    date: "2024-03-10",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
  },
  {
    slug: "wedding-photography-guide",
    title: "Ultimate Wedding Photography Guide",
    excerpt:
      "Everything you need to know about capturing your special day through the lens of a professional.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    category: "Photography",
    date: "2024-03-05",
    author: {
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Blog Header */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Wedding Planning Blog</h1>
            <p className="text-lg text-muted-foreground">
              Expert advice, inspiration, and tips for planning your perfect
              wedding day
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden group min-h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistance(new Date(post.date), new Date(), {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
