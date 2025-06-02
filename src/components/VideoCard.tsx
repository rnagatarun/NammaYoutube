export interface VideoInfo {
  id: string;
  snippet: {
    channelTitle: string;
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

const VideoCard = ({ snippet, statistics }: VideoInfo) => {
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-96 h-96 shadow-lg flex flex-col">
      <img className="object-cover w-full h-56 rounded-lg" src={thumbnails.high.url} alt="Thumbnail" />
      <ul className="flex-grow">
        <li className="font-bold py-2 line-clamp-2 overflow-hidden text-ellipsis">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard; 
