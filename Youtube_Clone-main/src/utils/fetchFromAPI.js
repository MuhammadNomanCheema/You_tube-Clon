import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

// Fetch data from YouTube API
export const fetchFromAPI = async (url, params = {}) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    console.error("❌ Missing API key. Make sure VITE_YOUTUBE_API_KEY is set in your .env file.");
    throw new Error("YouTube API key not defined");
  }

  const fullUrl = `${BASE_URL}/${url}`;
  const requestParams = {
    ...params,
    key: apiKey,
  };

  try {
    console.log("🔎 Sending request to:", fullUrl);
    console.log("🧾 With params:", requestParams);

    const { data } = await axios.get(fullUrl, { params: requestParams });
    return data;
  } catch (error) {
    console.error("❌ Failed to fetch videos:", error.response?.data || error.message);
    throw error;
  }
};
