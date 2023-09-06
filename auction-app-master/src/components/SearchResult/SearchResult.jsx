import Auctioncard from "../Auctioncard/Auctioncard";
import "./SearchResultStyles.css";

const SearchResult = ({result}) => {

    let searchResultList = result.map( (item) => {

        return (<Auctioncard key={item.AuktionID} auction={item}/>);
    });

    return (<div className="search-result">
    
        {searchResultList}

    </div>);
};
export default SearchResult;