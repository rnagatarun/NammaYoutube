import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { cacheResults } from '../store/searchSlice';

export const useYoutubeSearchApi = () => {
    const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store:RootState) => store.search)
    const dispatch = useDispatch();

    const getSearchResultsApi = async (searchQuery: string) => {
        try {
            const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await response.json();
            setSearchSuggestions(json[1]);

            //update cache
            dispatch(
                cacheResults({
                    [searchQuery]: json[1],

                })
            )
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
        const timer = setTimeout(() => {
            if (searchCache?.[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchResultsApi(searchQuery)
            }
        }, 200)
        return () => { clearTimeout(timer); }
    }, [searchCache, searchQuery])
    return { searchQuery, setSearchQuery, searchSuggestions, showSuggestions, setShowSuggestions };

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