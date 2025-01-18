import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="max-w-[360px] cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative mb-3">
        <Link to={`/watch/${data.videoId}`}>
        <img 
          src={data.videoThumbnail} 
          alt={data.videoTitle} 
          className="w-full aspect-video object-cover rounded-xl"
        />
        </Link>
        <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-2 py-1 rounded">
          {data?.videoDuration || "0:00"}
        </span>
      </div>

      {/* Video Info Container */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={data.channelInfo.image} 
            alt={data.channelInfo.name} 
            className="w-9 h-9 rounded-full"
          />
        </div>

        {/* Video Details */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="font-medium text-sm line-clamp-2 mb-1">
            {data.videoTitle}
          </h3>

          {/* Channel Name */}
          <div className="text-sm text-gray-400 hover:text-gray-300">
            {data.channelInfo.name}
          </div>

          {/* Video Stats */}
          <div className="text-sm text-gray-400">
            <span>{data.videoViews} views</span>
            <span className="mx-1">•</span>
            <span>{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
