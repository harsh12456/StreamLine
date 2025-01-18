import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/searchPageVideos",
  async (isNext, { getState }) => {
    try {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
      } = getState();

      const endpoint = `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=${encodeURIComponent(
        "T series"
      )}&key=${API_KEY}&part=snippet&type=video${
        isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
      }`;

      const response = await axios.get(endpoint);
      const items = response.data.items;
      const parsedData = await parseData(items);

      return {
        parsedData: isNext ? [...videos, ...parsedData] : parsedData,
        nextPageToken: response.data.nextPageToken,
      };
    } catch (error) {
      console.error("Error fetching home page videos:", error);
      throw error;
    }
  }
);


