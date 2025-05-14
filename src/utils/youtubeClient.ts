const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

if (!apiKey) {
    console.error('Warning: VITE_YOUTUBE_API_KEY is not defined in your environment variables.');
}

export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;


