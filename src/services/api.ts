import axios from 'axios';

// 🟢 Production: Just use '/api/movies'
// 🟡 Development: You might still want localhost if testing locally (optional)
const BASE_URL = import.meta.env.VITE_API_URL || '/api/movies';

export const apiClient = axios.create({
  baseURL: '', // We handle the path in the get call below
});

export const getMovies = async (searchTerm: string) => {
  try {
    // We call the redirect path we defined in netlify.toml
    const response = await apiClient.get(BASE_URL, {
      params: {
        s: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};