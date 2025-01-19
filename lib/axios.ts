import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.luxima.id/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    
});

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
        
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;