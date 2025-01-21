import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.luxima.id/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    
});

// Fungsi global untuk retry
const fetchWithRetry = async (config: AxiosRequestConfig, retries = 3, delay = 1000): Promise<AxiosResponse | void> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await axiosInstance(config); // Coba fetch ulang
    } catch (error) {
      if (attempt < retries - 1) {
        console.warn(`Retrying request... (${attempt + 1})`);
        await new Promise((resolve) => setTimeout(resolve, delay)); // Delay sebelum retry
      } else {
        throw error; // Lempar error jika percobaan habis
      }
    }
  }
};

axiosInstance.interceptors.request.use((config) => {
    // const token = localStorage.getItem("token") || "";
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const config = error.config;
        // Hanya retry permintaan GET
        if (config && config.method === "get" && !config._retry) {
        config._retry = true; // Tandai sebagai retry agar tidak looping
        return fetchWithRetry(config); // Retry logika fetch
        }
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;