import { React, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppSelector, useAppDispatch } from '../hooks/useApp';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import { clearVideos } from '../features/youtube/youtubeSlice';


function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const loading = useAppSelector((state) => state.youtubeApp.loading);
  const error = useAppSelector((state) => state.youtubeApp.error);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  const fetchMoreVideos = () => {
    if (!loading) {
      dispatch(getHomePageVideos(true));
    }
  };

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 overflow-y-auto">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={fetchMoreVideos}
              hasMore={true} // You might want to add a condition based on nextPageToken
              loader={<Spinner />}
              height={650}
              scrollableTarget="scrollableDiv"
            >
              <div className="grid gap-y-14 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                {videos.map((item) => (
                  <Card data={item} key={item.videoId} />
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

