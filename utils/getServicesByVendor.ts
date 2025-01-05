import { serviceData, Service } from "@/lib/serviceData";

export const getServicesByVendor = (vendorId: number): Service[] => {
  return serviceData.filter((service) => service.vendorId === vendorId);
};
