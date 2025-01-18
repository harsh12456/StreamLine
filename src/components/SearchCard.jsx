import React from 'react'
import { Link } from 'react-router-dom'

function SearchCard({data}) {
  return (
    <div className='flex gap-3'>
        <div className='relative'>
            <span className='absolute bottom-3 right-3 bg-gray-900 text-white text-sm px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to={`/watch/${data.videoId}`}>
            <img src={data.videoThumbnail} alt={data.videoTitle} className='h-52 w-96 rounded-xl cursor-pointer' />
            </Link>
        </div>
        <div className='flex gap-1 flex-col'>
            <h3 className='max-w-2xl'>
                < a href='#' className='line-clamp-2'>
                    {data.videoTitle}
                </a>
            </h3>
        <div className='text-xs text-gray-400'>
            <div>
                <div>
                    <span className='after:content-["·"] after:mx-1'>
                    {data.videoViews} views
                    </span>
                    <span>
                        {data.videoAge}
                    </span>
                </div>
            </div>
        </div>
            <div className='min-w-fit my-2'>
                <a href='#' className='flex items-center gap-2 text-xs text-gray-400'>
                    <img src={data.channelInfo.image} alt={data.channelInfo.name} className='w-9 h-9 rounded-full' />
                    <span>{data.channelInfo.name}</span>
                </a>

            </div>
            <div className='max-w-2xl ine-clamp-2 text-sm text-gray-400'>
                <p>{data.videoDescription}</p>
            </div>
        </div>

    </div>
  )
}

export default SearchCard
