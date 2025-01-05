"use client";
import { createContext, useContext } from "react";
import { Vendor } from "@/lib/vendorData";

const VendorContext = createContext<Vendor | null>(null);

export const VendorProvider = ({
  children,
  vendor,
}: {
  children: React.ReactNode;
  vendor: Vendor;
}) => {
  return (
    <VendorContext.Provider value={vendor}>{children}</VendorContext.Provider>
  );
};

export const useVendor = () => {
  const context = useContext(VendorContext);
  if (!context) throw new Error("useVendor must be used within VendorProvider");
  return context;
};
