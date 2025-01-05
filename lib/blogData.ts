

export interface BlogProps {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    social: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
      github?: string;
      facebook?: string;
      telegram?: string;
      whatsapp?: string;
    };
  };
}

export const blogs: BlogProps[] = [
  {
    slug: "wedding-photography-guide",
    title: "Wedding Photography Guide",
    subtitle: "Tips and Tricks for Capturing Beautiful Memories",
    category: "Photography",
    tags: ["wedding", "photography", "guide"],
    excerpt: "Learn how to capture the perfect wedding moments with our expert photography tips and tricks.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-06-01",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "John is a professional photographer with over 10 years of experience.",
      social: {
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        telegram: "https://telegram.com/johndoe",
        whatsapp: "https://wa.me/1234567890",
      },
    },
    
  },
  {
    slug: "wedding-trends-2024",
    title: "2024 Wedding Trends You Need to Know",
    subtitle: "Discover the latest trends shaping modern weddings",
    category: "Trends",
    tags: ["wedding", "trends"],
    excerpt:
      "Discover the latest trends shaping modern weddings, from sustainable celebrations to tech-integrated ceremonies.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    date: "2024-03-15",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Event planner and wedding venue specialist.",
      social: {
        instagram: "https://instagram.com/emma_thompson",
        twitter: "https://twitter.com/emma_thompson",
        linkedin: "https://linkedin.com/in/emma_thompson",
        github: "https://github.com/emma_thompson",
        facebook: "https://facebook.com/emma_thompson",
        telegram: "https://telegram.com/emma_thompson",
        whatsapp: "https://wa.me/1234567890",
      },
    },
    
  },
  {
    slug: "choosing-perfect-venue",
    title: "How to Choose Your Perfect Wedding Venue",
    subtitle: "Expert tips on selecting the ideal wedding venue",
    tags: ["wedding", "planning"],
    excerpt: "Expert tips on selecting the ideal wedding venue that matches your style, budget, and guest list.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    content: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    category: "Planning",
    date: "2024-03-10",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Event planner and wedding venue specialist.",
      social: {
        instagram: "https://instagram.com/michael_chen",
        twitter: "https://twitter.com/michael_chen",
        linkedin: "https://linkedin.com/in/michael_chen",
        github: "https://github.com/michael_chen",
        facebook: "https://facebook.com/michael_chen",
        telegram: "https://telegram.com/michael_chen",
        whatsapp: "https://wa.me/1234567890",
      },
    },
    
  },
  {
    slug: "ultimate-wedding-photography-guide",
    title: "Ultimate Wedding Photography Guide",
    subtitle: "Everything you need to know about capturing your special day through the lens of a professional.",
    category: "Photography",
    tags: ["wedding", "photography"],
    excerpt: "Everything you need to know about capturing your special day through the lens of a professional.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium massa augue, nec molestie eros vulputate ut. Curabitur in ante et sem tristique malesuada eget sed est. Mauris arcu ipsum, condimentum et nulla in, commodo finibus massa. In velit nibh, dignissim et cursus vel, posuere lacinia lacus. Nullam sollicitudin elit non lacus suscipit, vel mollis lacus blandit. Nunc sollicitudin volutpat nisl. Nulla sodales suscipit interdum. Sed est est, rutrum non massa eget, porta euismod urna. Integer nulla odio, tincidunt ac blandit at, commodo id lacus. Vestibulum in bibendum lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ex libero, lacinia condimentum convallis vel, semper fermentum dolor. Sed maximus pretium tellus eget lacinia. Praesent sit amet luctus sem. Aliquam maximus turpis ac vehicula efficitur. Nullam tempor nec justo vel egestas. Nam hendrerit rutrum mauris, vel volutpat mauris rhoncus vitae. Nulla mollis lorem vel dictum porta. Nunc condimentum turpis a nisl pharetra, in venenatis risus viverra. Nulla nec sem ut lectus tincidunt lobortis quis mattis lacus. Etiam ex ligula, pharetra vitae purus vitae, sodales iaculis lacus. Mauris turpis erat, consequat ut hendrerit dapibus, rhoncus sit amet felis. Vestibulum iaculis turpis arcu. Phasellus vulputate felis ac dictum cursus. Mauris efficitur condimentum nisi ut posuere. Curabitur feugiat non odio varius ullamcorper. Vestibulum at lorem quam massa finibus varius. Morbi gravida aliquam metus, sed iaculis libero blandit facilisis. Proin et eros felis. Curabitur sit amet elit euismod, semper lorem eu, feugiat ipsum. Nunc porta ipsum leo, et elementum lectus tempor in. Etiam arcu diam, interdum id eleifend a, porta at felis. Quisque sollicitudin augue ac dapibus auctor. Aenean eu elit ut est laoreet efficitur sed non est. Nam at suscipit velit, eu aliquam quam. Nulla pretium semper metus non congue.",
    date: "2024-03-05",
    author: {
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Wedding photographer and travel enthusiast.",
      social: {
        twitter: "https://twitter.com/sarah_williams",
        instagram: "https://instagram.com/sarah_williams",
        linkedin: "https://linkedin.com/in/sarah_williams",
        github: "https://github.com/sarah_williams",
        facebook: "https://facebook.com/sarah_williams",
        telegram: "https://t.me/sarah_williams",
        whatsapp: "https://wa.me/1234567890",
      },
    },
    
  },
  {
    slug: "sustainable-wedding-ideas",
    title: "Sustainable Wedding Ideas for a Greener Future",
    subtitle: "Discover eco-friendly wedding solutions that not only save the planet but also make your day more sustainable.",
    category: "Wedding Planning",
    tags: ["wedding", "sustainability"],
    excerpt:
      "Discover eco-friendly wedding solutions that not only save the planet but also make your day more sustainable.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium massa aug ue, nec molestie eros vulputate ut. Curabitur in ante et sem tristiqu e malesuada eget sed est. Mauris arcu ipsum, condimentum et nulla in",
    date: "2024-02-28",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Wedding photographer and travel enthusiast.",
      social: {
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        telegram: "https://t.me/johndoe",
        whatsapp: "https://wa.me/1234567890",
      },
    },
  },
  {
    slug: "wedding-venue-reviews",
    title: "Top Wedding Venue Reviews: Your Guide to Choosing the Perfect Venue",
    subtitle: "Discover the best wedding venues in your area based on real reviews from real couples.",
    category: "Venues",
    tags: ["wedding", "venues"],
    excerpt:
      "Discover the best wedding venues in your area based on real reviews from real couples.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    content: " Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    date: "2024-02-20",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Wedding photographer and travel enthusiast.",
      social: {
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        telegram: "https://t.me/janesmith",
      },
    },
  },
  {
    slug: "wedding-venue-reviews-2",
    title: "Top Wedding Venue Reviews: Your Guide to Choosing the Perfect Venue 2",
    subtitle: "Discover the best weddings venues in your area based on real reviews from real couples. 2 of 2",
    category: "Reviews",
    tags: ["wedding", "reviews"],
    excerpt:
      "Discover the best wedding venues in your area based on real reviews from real couples. 2 of 2",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    content: " Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    date: "2024-02-22",
    author: {
      name: "Jane Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Wedding photographer and travel enthusiast.",
      social: {
        twitter: "https://twitter.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/janedoe",
        facebook: "https://facebook.com/janedoe",
        telegram: "https://t.me/janedoe",
      },
    },
  },
];

// export function getAllBlogSlugs() {
//   return blogs.map((blog) => blog.slug);
// }

// export const getBlogBySlug = (slug: string) =>
//   blogs.find((blog) => blog.slug === slug);