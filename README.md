![React.js](https://img.shields.io/badge/React.js-18.x-blue)  ![Redux](https://img.shields.io/badge/Redux-Toolkit-orange)  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-teal)  ![YouTube Data API](https://img.shields.io/badge/YouTube%20Data%20API-v3-red)  ![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)  ![Status](https://img.shields.io/badge/Status-In%20Development-blue)  

# StreamLine - A YouTube-Inspired Video Streaming Platform

A YouTube-inspired video streaming platform built using **React.js**, **Redux**, **Tailwind CSS**, and the **YouTube Data API**. This project replicates key features of YouTube, including video playback, search functionality, and displaying trending videos, with a responsive user interface.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

---

## Features

- **Trending Videos**: Fetches and displays trending videos using the **YouTube Data API**.
- **Search Functionality**: Real-time search results powered by **Redux** for optimized state management.
- **Video Playback**: Embeds YouTube videos with playback controls and displays metadata like title, channel info, and views.
- **Responsive Design**: Fully responsive layout built with **Tailwind CSS**, ensuring compatibility across devices.

---

## Demo

### Home Page
- Displays trending videos fetched from the YouTube Data API with a modern, responsive UI.

### Search Page
- Allows users to search for videos with real-time result updates.

### Video Playback Page
- Plays videos embedded from YouTube and shows detailed metadata, including the title, description, and view count.

---

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

```bash
   git clone https://github.com/yourusername/streamline.git
   cd streamline
```

2. **Install Dependencies**:

```bash
   npm install
```

3. **Set Environment Variables**:
   Create a `.env` file in the project directory and add the following:

```env
   REACT_APP_YOUTUBE_API_KEY=your_youtube_data_api_key
```

4. **Start the Development Server**:

```bash
   npm start
```

5. **Access the Application**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Navigate to the **Home Page** to view trending videos.
2. Use the **Search Bar** to find specific videos in real-time.
3. Click on any video to access the **Video Playback Page** and view detailed metadata.

---

## Technologies Used

- **Frontend**:
  - React.js
  - Redux
  - Tailwind CSS
- **API Integration**:
  - YouTube Data API
- **Core Web Technologies**:
  - JavaScript, HTML5, CSS3

---

## Project Structure
```
streamline/
├── src/
│   ├── components/           # React components for UI
│   │   ├── VideoCard.js      # Component for displaying individual videos
│   │   ├── SearchBar.js      # Search input component
│   │   └── VideoPlayer.js    # Component for video playback
│   ├── pages/                # Pages for routing
│   │   ├── HomePage.js       # Displays trending videos
│   │   ├── SearchPage.js     # Displays search results
│   │   └── VideoPage.js      # Video playback page
│   ├── redux/                # Redux store and slices
│   │   ├── store.js          # Configures Redux store
│   │   └── videoSlice.js     # Handles video-related state
│   ├── App.js                # Main application file
│   ├── index.js              # Entry point for React app
├── public/                   # Static assets
├── .env                      # Environment variables
├── package.json              # Node.js dependencies and scripts
└── README.md                 # Project documentation
```
---

## Future Improvements

- Add user authentication for personalized experiences.
- Implement a recommendation system using machine learning.
- Integrate a comment and like system for better user engagement.
- Optimize performance with server-side rendering (SSR) using Next.js.
- Extend API integrations for enhanced features, such as playlists and subscriptions.


