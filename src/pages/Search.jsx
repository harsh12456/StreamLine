import { React, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppSelector, useAppDispatch } from '../hooks/useApp';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtube/youtubeSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../components/Spinner';
import SearchCard from '../components/SearchCard';

function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const loading = useAppSelector((state) => state.youtubeApp.loading);
  const error = useAppSelector((state) => state.youtubeApp.error);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/");
    } else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Videos Section */}
        <div className="flex-1 overflow-y-auto">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={true} // You can conditionally update this based on nextPageToken
              loader={<Spinner />}
              height={650}
              scrollableTarget="scrollableDiv"
            >
              {/* Updated Layout */}
              
                {videos.map((item) => {
                  return(
                    <div className="flex flex-col gap-4 p-4">
                    <SearchCard data={item} key={item.videoId} />
                    </div>)
                })}
              
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

export default Search;



