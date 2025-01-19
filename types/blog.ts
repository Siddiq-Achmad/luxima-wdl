export interface Blog {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  content: string;
  date: string;
  status: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    roles?: string[];
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
      github?: string;
      facebook?: string;
      telegram?: string;
      whatsapp?: string;
    };
  };
  comment?: {
    id: number;
    name: string;
    email: string;
    comment: string;
    createdAt: string; 
  };
}