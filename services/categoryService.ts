import api from "@/lib/axios";

export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data.data; // Hanya ambil data kategori
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
