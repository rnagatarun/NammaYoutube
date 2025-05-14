import { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_API } from "../utils/youtubeClient";
import type { VideoInfo } from "../components/VideoCard";

const usePopularYoutubeVideos = () => {
    const [videos, setVideos] = useState<VideoInfo[]>([]);

    const getPopularVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_POPULAR_API, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching popular videos:", error);
        }
    };

    useEffect(() => {
        getPopularVideos();
    }, []);

    return videos;
};

export default usePopularYoutubeVideos;
