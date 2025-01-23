import axios from "axios";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

interface UnsplashResponse {
  results: UnsplashImage[];
}

export const fetchUnsplashImages = async (query: string): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>("https://api.unsplash.com/search/photos", {
    params: {
      query,
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
      per_page: 12,
    },
  });
  return response.data;
};

export const fetchUnsplashRandomImages = async (
  collectionId: string,
  count: number = 1
) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
        collections: collectionId,
        count,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random Unsplash images:", error);
    throw error;
  }
};