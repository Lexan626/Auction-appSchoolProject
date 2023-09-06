import dayjs from "dayjs";
import DetailsActive from "../../components/Details/DetailsActive";
import DetailsNoBid from "../../components/Details/DetailsNoBid";
import DetailsNotActive from "../../components/Details/DetailsNotActive";
import GetBid from "../../services/GetBid";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import AddBid from "../../services/AddBid";
import "./DetailAuctionContainerStyles.css";

const DetailAuctionContainer = (props) => 
{
    const location = useLocation();
    const {auction} = location.state;

    let endDate = dayjs(auction.slutDatumDTO);
    let now = dayjs();

    const[bidList, setBidList] = useState([])

    const getBidList = async () => 
    {
        let bidArr = await GetBid(auction.auktionIdDTO);
        setBidList(bidArr);
    };

    const addBid = (id, price) =>
    {
        AddBid(id,price);
        const timer = setTimeout(() => {
            getBidList();
          }, 1000);
    }

    useEffect(() => 
    {
        getBidList();

    }, [])

    if (endDate > now && bidList.length > 0 ) 
    {
        let highestBid = bidList[bidList.length -1 ].Summa;
        return(<div className="detailContainer">
            <DetailsActive Auction = {auction} BidList = {bidList} HighestBid ={highestBid} AddBid = {addBid}/>
            </div>)
    }
    if (endDate > now && bidList.length === 0 ) 
    {
        return(<div className="detailContainer"><DetailsNoBid item ={{auction}} AddBid = {addBid}/></div>) 
    }
    if (endDate < now ) 
    {
        let highestBid;
        if (bidList.length > 0)
        {
            highestBid = bidList[bidList.length - 1].Summa;
        }
        return(<div className="detailContainer"><DetailsNotActive Auction ={auction} HighestBid={highestBid}/></div>) 
    }
};
export default DetailAuctionContainer;