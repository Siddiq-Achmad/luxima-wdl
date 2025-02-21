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
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      whatsapp?: string;
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
  workingHours?: {
    open: string;
    close: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}