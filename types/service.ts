export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  status: number;
  unit: string;
  duration: number;
  price: number;
  discount: number;
  discountPrice: number;
  views: number;
  likes: number;
  dislikes: number;
  rating: number;
  reviewCount: number;
}

export type Services = Service[];
