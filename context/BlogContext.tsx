"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axiosInstance from "@/lib/axios";
import { Blog } from "@/types/blog";

interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalItems: number;
}

interface Navigation {
  slug: string;
  title: string;
}
type BlogContextType = {
  blogs: Blog[] | null;
  blog: Blog | null;
  pagination: Pagination;
  previous: Navigation | null;
  next: Navigation | null;
  loading: boolean;
  fetchBlogs: (page?: number) => Promise<void>;
  fetchBlogDetail: (slug: string) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [previous, setPrevious] = useState<Navigation | null>(null);
  const [next, setNext] = useState<Navigation | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    perPage: 12,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);

  // Fetch multiple blogs
  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/blogs?page=${page}&limit=${pagination.perPage}`
      );
      const res = response.data;
      const data = res.data;
      setBlogs(data);
      setPagination({
        currentPage: res.currentPage,
        totalPages: res.totalPages,
        perPage: res.perPage,
        totalItems: res.totalItems,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single blog detail
  const fetchBlogDetail = async (slug: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/blog/${slug}`);
      const res = response.data;
      const data = res.data;
      setBlog(data);
      setPrevious(res.previous);
      setNext(res.next);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
      setBlog(null);
      setPrevious(null);
      setNext(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blog,
        pagination,
        previous,
        next,
        loading,
        fetchBlogs,
        fetchBlogDetail,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
