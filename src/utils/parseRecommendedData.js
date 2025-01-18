import axios from "axios";
import React from "react";
import { parseVideoDuration } from "./parseVideoDuration";
import { convertRawtoString } from "./convertRawtoString";
import { timeSince } from "./timeSince";

const API_KEY = import.meta.env.VITE_APP_YOUTUBE_DATA_API_KEY;

export const parseRecommendedData = async (items) => {
  try {
    const videosIds = [];
    const channelIds = [];

    // Pushing video and channel IDs to arrays
    items.forEach((item) => {
      if (item.id?.videoId) videosIds.push(item.id.videoId);
      if (item.snippet?.channelId) channelIds.push(item.snippet.channelId);
    });

    // Fetching channel data
    const { data: { items: channelsData } = {} } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`
    );

    const parsedChannelsData = channelsData?.map((channel) => ({
      id: channel.id,
      channelTitle: channel.snippet?.title || "Unknown Channel",
      image: channel.snippet?.thumbnails?.default?.url || "",
    }));

    // Fetching video data
    const { data: { items: videosData } = {} } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videosIds.join(",")}&key=${API_KEY}`
    );

    // Combine both data sets
    const parsedData = [];
    items.forEach((item) => {
      const videoData = videosData.find((video) => video.id === item.id.videoId);
      const channelData = parsedChannelsData.find(
        (channel) => channel.id === item.snippet.channelId
      );

      if (videoData && channelData) {
        parsedData.push({
          videoId: item.id.videoId,
          videoTitle: item.snippet?.title || "No Title",
          videoDescription: item.snippet?.description || "",
          videoThumbnail: item.snippet?.thumbnails?.medium?.url || "",
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videoData.contentDetails?.duration || "PT0S"
          ),
          videoViews: convertRawtoString(
            videoData.statistics?.viewCount || "0"
          ),
          videoAge: timeSince(new Date(item.snippet?.publishedAt || Date.now())),
          channelInfo: {
            id: item.snippet?.channelId || "",
            image: channelData.image,
            name: channelData.channelTitle,
          },
        });
      }
    });

    return parsedData;
  } catch (error) {
    console.error("Error parsing data:", error.message, error);
    throw error; 
  }
};
