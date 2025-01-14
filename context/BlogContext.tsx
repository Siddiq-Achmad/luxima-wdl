"use client";

import { BlogProps } from "@/lib/blogData";
import React, { createContext, useContext, useState } from "react";

// interface BlogContextProps {
//   selectedBlog: string | null;
//   setSelectedBlog: (slug: string | null) => void;
// }

// const BlogContext = createContext<BlogContextProps | undefined>(undefined);

// export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

//   return (
//     <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export const useBlogContext = () => {
//   const context = useContext(BlogContext);
//   if (!context) {
//     throw new Error("useBlogContext must be used within a BlogProvider");
//   }
//   return context;
// };

const BlogContext = createContext<BlogProps | null>(null);

export const BlogProvider = ({
  children,
  blog,
}: {
  children: React.ReactNode;
  blog: BlogProps;
}) => {
  return <BlogContext.Provider value={blog}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context)
    throw new Error("useBlogContext must be used within a BlogProvider");
  return context;
};
