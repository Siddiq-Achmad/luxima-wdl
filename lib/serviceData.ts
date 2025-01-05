export interface Service {
  id: number;
  vendorId: number;
  title: string;
  description: string;
  image?: string;
  unit?: string;
  price?: number;
  duration?: number;
  

}

export const serviceData: Service[] = [
  {
    id: 1,
    vendorId: 1,
    title: "Photography",
    description: "Professional wedding photography.",
    image: "https://picsum.photos/200/300",
    unit: "hour",
    price: 50,
    duration: 2

  },
  {
    id: 2,
    vendorId: 1,
    title: "Catering",
    description: "Delicious catering for your events.",
    image: "https://picsum.photos/200/300",
    unit: "hour",
    price: 50,
    duration: 2
  },
  {
    id: 3,
    vendorId: 1,
    title: "Decoration",
    description: "Beautiful decoration for any occasion.",
    image: "https://picsum.photos/200/300",
    unit: "hour",
    price: 50,
    duration: 2
  },
  {
    id: 4,
    vendorId: 2,
    title: "Makeup Artist",
    description: "Professional makeup services.",
  },
  {
    id: 5,
    vendorId: 2,
    title: "Entertainment",
    description: "Music and fun for your events.",
  },
  {
    id: 6,
    vendorId: 1,
    title: "Venue Booking",
    description: "Amazing venues for your wedding.",
  },
];
