import api from "@/lib/axios";

export const getCity = async () => {
    try {
        const response = await api.get("/locations");
        return response.data.data; // Hanya ambil data lokasi
    } catch (error) {
        throw new Error("Failed to fetch locations");
    }
};