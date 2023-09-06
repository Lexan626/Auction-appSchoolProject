import {useState} from "react";
import "./SearchContainerStyles.css";
import GetAuctions from "../../services/GetAuctions";
import SearchBar from "../../components/SearchBar/SeachBar";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchContainer = () => {

    const[searchResult, setSearchResult]=useState([]);

    const search = async (query) => {

        let result = await GetAuctions();

        let filteredList = result.filter(a => a.titelDTO.toLowerCase().includes(query.toLowerCase()));

        setSearchResult(filteredList);
    };

    return (<div className="searchContainer">
            <SearchBar search={search}/>
            <SearchResult result={searchResult} />
        </div>);
};
export default SearchContainer;