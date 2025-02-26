import { Service } from "./service";
import { Social } from "./social";

export interface Vendor {
  id: number;
  slug: string;
  name: string;
  address: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  isFeatured: boolean;
  isActive: boolean;
  isVerified: boolean;
  location: string;
  services: Service[]; // Relasi dengan services
  gallery?: string[];
  tags?: string[];
  owner?: {
    name?: string;
    email?: string;
    avatar?: string;
    bio?: string;
    phone?: string;
    socialMedia?: Social;
  };
  contact?: {
    phone: string;
    email: string;
    website: string;
  };
  social?: Social;
  workingHours?: {
    open: string;
    close: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  meta?: {
    title?: string;
    keywords?: string;
    description?: string;
  };
  // location?: {
  //   city: string;
  //   state: string;
  //   country: string;
  //   zip: string;
  //   slug: string;
  // }
}