"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Vendor } from "@/types/vendor";
import { axiosInstance } from "@/lib/axios";

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

type VendorContextType = {
  vendors: Vendor[] | null;
  vendor: Vendor | null;
  pagination: Pagination;
  loading: boolean;
  error: boolean;
  fetchVendors: (page?: number) => Promise<void>;
  fetchVendorDetail: (slug: string) => void;
};

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export const VendorProvider = ({ children }: { children: ReactNode }) => {
  const [vendors, setVendors] = useState<Vendor[] | null>(null);
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [previous, setPrevious] = useState<Navigation | null>(null);
  const [next, setNext] = useState<Navigation | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    perPage: 12,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch multiple blogs
  const fetchVendors = async (page = 1) => {
    setLoading(true);
    try {
      // const response = await axiosInstance.get(
      //   `/vendors?page=${page}&limit=${pagination.perPage}`
      // );
      const response = await axiosInstance.get(
        `/vendors?page=${page}&limit=${pagination.perPage}`
      );
      const res = response.data;
      const data = res.data;
      setVendors(data);
      setPagination({
        currentPage: res.currentPage,
        totalPages: res.totalPages,
        perPage: res.perPage,
        totalItems: res.totalItems,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single blog detail
  const fetchVendorDetail = async (slug: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/vendor/${slug}`);
      const res = response.data;
      const data = res.data;
      setVendor(data);
      setPrevious(res.previous);
      setNext(res.next);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
      setVendor(null);
      setPrevious(null);
      setNext(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <VendorContext.Provider
      value={{
        vendors,
        vendor,
        pagination,
        // previous,
        // next,
        loading,
        error,
        fetchVendors,
        fetchVendorDetail,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

// export const VendorProvider = ({
//   children,
//   vendor,
// }: {
//   children: React.ReactNode;
//   vendor: Vendor;
// }) => {
//   return (
//     <VendorContext.Provider value={vendor}>{children}</VendorContext.Provider>
//   );
// };

export const useVendorContext = () => {
  const context = useContext(VendorContext);
  if (!context)
    throw new Error("useVendorContext must be used within VendorProvider");
  return context;
};
