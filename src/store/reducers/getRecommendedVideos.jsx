import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseRecommendedData } from "../../utils/parseRecommendedData";

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtube/App/getRecommendedVideos",
  async (videoId, { getState }) => {
    try {
      const {
        youtubeApp: { currentPlaying:{channelInfo:{id:channelId}} },
      } = getState();

      const endpoint = `https://youtube.googleapis.com/youtube/v3/activites?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=videoId=${
        videoId
      }`;

      const response = await axios.get(endpoint);
      const items = response.data.items;
      const parsedData = await parseRecommendedData(items,videoId);

      return {
        parsedData
      };
    } catch (error) {
      console.error("Error fetching home page videos:", error);
      throw error;
    }
  }
);