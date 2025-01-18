import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/useApp';
import Navbar from '../components/Navbar';
import { getVideoDetails } from '../store/reducers/getVideoDetails';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';

function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector((state) => state.youtubeApp.currentPlaying);
  console.log(currentPlaying);  
  const recommendedVideo = useAppSelector((state) => state.youtubeApp.recommendedVideo);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, dispatch, navigate]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [currentPlaying, id, dispatch]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden ">
          <div className="h-[7.5vh]">
            <Navbar />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0  overflow-auto ">
              <div className="flex gap-4 flex-col">
                <div className="relative ">
                  <iframe
                    className='rounded-xl '
                    width="900"
                    height="500"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    
                  ></iframe>
                </div>
                {/* Video title */}
                <div className="text-xl font-bold">
                  {currentPlaying.videoTitle}
                </div>
                {/* Channel info */}
                <div className="flex justify-between flex-row items-center ">
                  <div className="flex gap-2 items-center">
                    <img 
                      src={currentPlaying.channelInfo.image} 
                      alt="" 
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h5 className="font-bold">{currentPlaying.channelInfo.name}</h5>
                      <h6 className="text-gray-400 text-sm">{currentPlaying.channelInfo.subscribers} subscribers</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Watch;

