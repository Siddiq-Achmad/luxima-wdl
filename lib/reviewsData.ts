
export interface ReviewType {
    RevId: number
    createdAt: string;
    rating: number;
    title: string;
    content: string;
    vendorId: number;
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}

export const reviews: ReviewType[] = [
  {

      user: {
          name: "John Doe",
          email: "5bNl1@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 5,
      title: "Great product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 1,
      RevId: 1
  },
  {

      user: {
          name: "Jane Doe",
          email: "5bNl1@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 4,
      title: "Fantastic product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 1,
      RevId: 2
  },
  {

      user: {
          name: "Robert Doe",
          email: "5bNl1@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29066708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 3,
      title: "Beautiful product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 2,
      RevId: 3
  },
  {

      user: {
          name: "Mark Doe",
          email: "5bNl1@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258a14e29066708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 2,
      title: "Average product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 4,
      RevId: 4
  },
  {

      user: {
          name: "Frank Doe",
          email: "frank@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29526708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 1,
      title: "Disappointing product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 4,
      RevId: 5
  },
  {

      user: {
          name: "Zoe Doe",
          email: "zoedoe@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29926708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 5,
      title: "Great product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 6,
      RevId: 6
  },
  {

      user: {
          name: "Bob Doe",
          email: "bob@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29b26708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 4,
      title: "Good product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 5,
      RevId: 7
  },
  {

      user: {
          name: "Francis Doe",
          email: "francis@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258b14e29326708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 3,
      title: "Average product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 1,
      RevId: 8
  },
  {

      user: {
          name: "Milan Doe",
          email: "milan@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29326708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 2,
      title: "Bad product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 1,
      RevId: 9
  },
  {

      user: {
          name: "John Doe",
          email: "john@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 5,
      title: "Great product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 1,
      RevId: 10
  },
  {

      user: {
          name: "Jane Doe",
          email: "jane@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258ab4e29066708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 4,
      title: "Fantastic product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 2,
      RevId: 12
  },
  {

      user: {
          name: "Robert Doe",
          email: "robert@example.com",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29066708c",
      },
      createdAt: "2021-08-01T12:00:00.000Z",
      rating: 3,
      title: "Beautiful product",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      vendorId: 2,
      RevId: 13
  },
];


