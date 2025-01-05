import { vendors } from "@/lib/vendorData";
// Fungsi untuk mendapatkan related vendors
export const getRelatedVendors = (blogTags: string[]) => {
  // Filter vendor berdasarkan kesamaan tag
  const relatedVendors = vendors
    .map((vendor) => ({
      ...vendor,
      relevance: vendor.tags.filter((tag) => blogTags.includes(tag)).length,
    }))
    .filter((vendor) => vendor.relevance > 0) // Hanya vendor dengan relevansi
    .sort((a, b) => b.relevance - a.relevance) // Urutkan relevansi tertinggi
    .slice(0, 6); // Ambil maksimal 4 vendor

  return relatedVendors;
};
