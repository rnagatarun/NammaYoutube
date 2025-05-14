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
    <div className="p-2 m-2 w-70 shadow-lg">
      <img className="object-cover w-full h-37" src={thumbnails.high.url} alt="Thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};
export default VideoCard;
