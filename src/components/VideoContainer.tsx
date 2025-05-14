import usePopularYoutubeVideos from "../hooks/usePopularYoutubeVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = usePopularYoutubeVideos();

  return (
    <div className="flex flex-wrap justify-center">
      {videos && videos.map((video) => <VideoCard key={video.id} {...video} />)}
    </div> 
  );
};

export default VideoContainer;
