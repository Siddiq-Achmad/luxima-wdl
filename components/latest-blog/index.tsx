import { BlogCard } from "./blog-card";

const LATEST_POSTS = [
  {
    slug: "wedding-trends-2024",
    title: "2024 Wedding Trends You Need to Know",
    excerpt:
      "Discover the latest trends shaping modern weddings, from sustainable celebrations to tech-integrated ceremonies.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
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
    date: "2024-03-05",
    author: {
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
];

export default function LatestBlog() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wedding Planning Tips & Inspiration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice and creative ideas to help you plan your perfect
            wedding day
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
