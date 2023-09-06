import { useRef } from "react";
import "./SearchBarStyles.css";

const SearchBar = ({search}) => {

    const query = useRef();

    const clearInput = () => {
        query.current.value = "";
    };

    const searchEnter = (e) => {

        if(e.key === "Enter"){
            search(query.current.value);
        }
    };

    return (<div className="searchBarDiv">

        <input className="searchBar" type="text" ref={query} placeholder="Sök auktion" 
               onFocus= { () => clearInput()} onKeyPress={ (e) => searchEnter(e)}/>

        <button className="search-btn" onClick={ () => search(query.current.value)}>Sök</button>
    </div>);
};
export default SearchBar;