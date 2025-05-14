import { Link } from "react-router-dom";
import usePopularYoutubeVideos from "../hooks/usePopularYoutubeVideos";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = usePopularYoutubeVideos();

  return (
    <div className="flex flex-wrap justify-center">
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v="+ video.id}>
            <VideoCard key={video.id} {...video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
