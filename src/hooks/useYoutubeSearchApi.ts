import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

export const useYoutubeSearchApi = () => {
    // const [searchBarResults, setSearchBarResults] = useState<object>({});
    const [searchQuery, setSearchQuery] = useState<string>("");


    const getSearchResultsApi = async(searchQuery: string) => {
        try{
            const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await response.json();
            console.log(json[1]);
        }
        catch(error){
            console.error("Error fetching search results:", error);
        }
    }

    useEffect(() => {
        //API Call
        getSearchResultsApi(searchQuery);

        /*
        Make API Call after every key press 
        but if gap b/w 2 api calls is <200ms then decline API call
        */

    },[searchQuery])
    return { searchQuery, setSearchQuery };

}