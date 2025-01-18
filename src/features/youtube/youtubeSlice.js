
import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [], // This will store search results separately
    nextPageToken: null,
    recommendedVideos: [],
    loading: false,
    error: null,
    isSearching: false // New flag to track if we're in search mode
};

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.isSearching = true;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
            state.searchResults = [];
            state.isSearching = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHomePageVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomePageVideos.fulfilled, (state, action) => {
                state.loading = false;
                if (!state.isSearching) {
                    state.videos = action.payload.parsedData;
                    state.nextPageToken = action.payload.nextPageToken;
                }
                state.error = null;
            })
            .addCase(getHomePageVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getSearchPageVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSearchPageVideos.fulfilled, (state, action) => {
                state.loading = false;
                if (state.isSearching) {
                    state.videos = action.payload.parsedData;
                    state.nextPageToken = action.payload.nextPageToken;
                }
                state.error = null;
            })
            .addCase(getSearchPageVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getRecommendedVideos.fulfilled, (state, action) => {
                state.loading = false;
                if (state.isSearching) {  
                    state.recommendedVideos = action.payload.parsedData;
                }
                state.error = null;
            })
            .addCase(getVideoDetails.fulfilled, (state, action) => {
                 
                    state.currentPlaying = action.payload;
               
                
            })
    }
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } = youtubeSlice.actions;
export default youtubeSlice.reducer;