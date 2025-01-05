
// export interface VendorCardProps {
//   id: string;
//   name: string;
//   slug: string;
//   category: string;
//   rating: number;
//   reviewCount: number;
//   image: string;
//   location: string;
//   isFeatured?: boolean;
// }

// export const VENDORS = [
//   {
//     id: "1",
//     name: "Elegant Events Venue",
//     slug: "elegant-events-venue",
//     category: "Wedding Venue",
//     rating: 4.8,
//     reviewCount: 156,
//     image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
//     location: "Los Angeles, CA",
//     isFeatured: true,
//   },
//   {
//     id: "2",
//     name: "Divine Florals",
//     slug: "divine-florals",
//     category: "Florist",
//     rating: 4.9,
//     reviewCount: 98,
//     image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
//     location: "Beverly Hills, CA",
//     isFeatured: false,
//   },
//   {
//     id: "3",
//     name: "Captured Moments",
//     slug: "captured-moments",
//     category: "Photography",
//     rating: 5.0,
//     reviewCount: 124,
//     image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
//     location: "Santa Monica, CA",
//     isFeatured: false,
//   },
//   {
//     id: "4",
//     name: "DSweet Treats Bakery",
//     slug: "dsweet-treats-bakery",
//     category: "Bakery",
//     rating: 4.8,
//     reviewCount: 156,
//     image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
//     location: "Los Angeles, CA",
//     isFeatured: false,
//   },
//   {
//     id: "5",
//     name: "Monie Makeup",
//     slug: "monie-makeup",
//     category: "Make up Artist",
//     rating: 4.9,
//     reviewCount: 98,
//     image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
//     location: "Beverly Hills, CA",
//     isFeatured: true,
//   },
//   {
//     id: "6",
//     name: "DOne Photography",
//     slug: "done-photography",
//     category: "Photography",
//     rating: 5.0,
//     reviewCount: 124,
//     image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
//     location: "Santa Monica, CA",
//     isFeatured: true,
//   },
// ];




export interface Vendor {
  id: number;
  slug: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  services: string[];
  tags: string[];
  owner: {
    name: string;
    socialMedia: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
  contact: {
    phone: string;
    email: string;
  };
  social: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
    whatsapp?: string;
  }
  workingHours: {
    open: string;
    close: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const vendors: Vendor[] = [
  {
    id: 1,
    slug: "vendor-1",
    name: "Vendor 1",
    category: "Catering",
    rating: 4.5,
    reviewCount: 120,
    location: "Jakarta, Indonesia",
    description: "We provide excellent catering services for weddings.",
    services: ["Wedding Catering", "Event Catering"],
    tags: ["food", "catering", "wedding"],
    owner: {
      name: "John Doe",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor1.com",
    },
    social: {
      facebook: "https://facebook.com/vendor1",
      instagram: "https://instagram.com/vendor1",
      twitter: "https://twitter.com/vendor1",
      tiktok: "https://tiktok.com/vendor1",
      youtube: "https://youtube.com/vendor1",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
  },
  {
    id: 2,
    slug: "vendor-2",
    name: "Vendor 2",
    category: "Photography",
    rating: 4.8,
    reviewCount: 90,
    location: "Bandung, Indonesia",
    description: "We offer professional photography services for weddings.",
    services: ["Wedding Photography", "Event Photography"],
    tags: ["wedding", "photo", "event"],
    owner: {
      name: "Jane Doe",
      socialMedia: {
        facebook: "https://facebook.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        twitter: "https://twitter.com/janedoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor2.com",
    },
    social: {
      facebook: "https://facebook.com/vendor2",
      instagram: "https://instagram.com/vendor2",
      twitter: "https://twitter.com/vendor2",
      tiktok: "https://tiktok.com/vendor2",
      youtube: "https://youtube.com/vendor2",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
  },
  {
    id: 3,
    slug: "vendor-3",
    name: "Vendor 3",
    category: "Videography",
    rating: 4.9,
    reviewCount: 80,
    location: "Jakarta, Indonesia",
    description: "We provide excellent videography services for weddings.",
    services: ["Wedding Videography", "Event Videography"],
    tags: ["wedding", "video", "event"],
    owner: {
      name: "John Doe",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor3.com",
    },
    social: {
      facebook: "https://facebook.com/vendor3",
      instagram: "https://instagram.com/vendor3",
      twitter: "https://twitter.com/vendor3",
      tiktok: "https://tiktok.com/vendor3",
      youtube: "https://youtube.com/vendor3",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    isFeatured: true
  },
  {
    id: 4,
    slug: "vendor-4",
    name: "Vendor 4",
    category: "Catering",
    rating: 4.5,
    reviewCount: 120,
    location: "Jakarta, Indonesia",
    description: "We provide excellent catering services for weddings.",
    services: ["Wedding Catering", "Event Catering"],
    tags: ["food", "catering", "wedding"],
    owner: {
      name: "John Doe",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor4.com",
    },
    social: {
      facebook: "https://facebook.com/vendor4",
      instagram: "https://instagram.com/vendor4",
      twitter: "https://twitter.com/vendor4",
      tiktok: "https://tiktok.com/vendor4",
      youtube: "https://youtube.com/vendor4",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    isFeatured: true
  },
  {
    slug: "vendor-5",
    name: "Vendor 5",
    category: "Photography",
    rating: 4.8,
    reviewCount: 90,
    location: "Bandung, Indonesia",
    description: "We offer professional photography services for weddings.",
    services: ["Wedding Photography", "Event Photography"],
    tags: ["wedding", "photo", "event"],
    owner: {
      name: "Jane Doe",
      socialMedia: {
        facebook: "https://facebook.com/janedoe",
        instagram: "https://instagram.com/janedoe",
        twitter: "https://twitter.com/janedoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor5.com",
    },
    social: {
      facebook: "https://facebook.com/vendor5",
      instagram: "https://instagram.com/vendor5",
      twitter: "https://twitter.com/vendor5",
      tiktok: "https://tiktok.com/vendor5",
      youtube: "https://youtube.com/vendor5",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    id: 5,
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
  },
  {
    slug: "vendor-6",
    name: "Vendor 6",
    category: "Videography",
    rating: 4.9,
    reviewCount: 80,
    location: "Jakarta, Indonesia",
    description: "We provide excellent videography services for weddings.",
    services: ["Wedding Videography", "Event Videography"],
    tags: ["wedding", "video", "event"],
    owner: {
      name: "John Doe",
      socialMedia: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    contact: {
      phone: "+62 812 3456 7890",
      email: "contact@vendor6.com",
    },
    social: {
      facebook: "https://facebook.com/vendor6",
      instagram: "https://instagram.com/vendor6",
      twitter: "https://twitter.com/vendor6",
      tiktok: "https://tiktok.com/vendor6",
      youtube: "https://youtube.com/vendor6",
      whatsapp: "https://wa.me/6281234567890",
    },
    workingHours: {
      open: "09:00 AM",
      close: "06:00 PM",
    },
    id: 6,
    coordinates: {
      lat: 0,
      lng: 0
    },
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    isFeatured: true
  },
  
  // Data vendor lainnya

];