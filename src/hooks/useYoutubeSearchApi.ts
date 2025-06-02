import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

export const useYoutubeSearchApi = () => {
    // const [searchBarResults, setSearchBarResults] = useState<object>({});
    const [searchQuery, setSearchQuery] = useState<string>("");


    const getSearchResultsApi = async (searchQuery: string) => {
        try {
            const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await response.json();
            console.log(json[1]);
        }
        catch (error) {
            console.error("Error fetching search results:", error);
        }
    }

    useEffect(() => {
        //API Call with Debouncing
         /*
        Make API Call after every key press 
        but if gap b/w 2 api calls is <200ms then decline API call
        */
        const timer = setTimeout(() => getSearchResultsApi(searchQuery), 200)
        return () => {clearTimeout(timer);}
    }, [searchQuery])
    return { searchQuery, setSearchQuery };

}

/**
 * key - i
 * - render the component
 * - useEffect()
 * - start timer => make api call after 200 ms
 *
 * key - ip
 * - destroy the component(useEffect return method)
 * - re-render the component
 * - useEffect()
 * - start timer => make api call after 200 ms
 *
 * setTimeout(200) - make an API call after 200 ms
 */