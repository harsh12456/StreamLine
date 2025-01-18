import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
    "youtubeApp/getSearchPageVideos",
    async (isNext, { getState }) => {
      try {
        const {
          youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
        } = getState();
  
        if (!searchTerm) {
          throw new Error('Search term is required');
        }
  
        const endpoint = `https://youtube.googleapis.com/youtube/v3/search?maxResults=50&q=${encodeURIComponent(
          searchTerm
        )}&key=${API_KEY}&part=snippet&type=video${
          isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
        }`;
  
        const response = await axios.get(endpoint);
        
        if (!response.data) {
          throw new Error('No data received from YouTube API');
        }
  
        const items = response.data.items;
        const parsedData = await parseData(items);
  
        return {
          parsedData: isNext ? [...videos, ...parsedData] : parsedData,
          nextPageToken: response.data.nextPageToken,
        };
      } catch (error) {
        console.error("Error fetching search page videos:", error);
        throw error;
      }
    }
  );
