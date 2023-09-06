import GetAuctions from "../../services/GetAuctions";
import Startview from "../../components/Startview/Startview";
import {useState, useEffect} from 'react'
import "./ActiveAuctionContainerStyles.css";

const ActiveAuctionContainer = () => {

    const[auctionList, setAuctionlist] = useState([])
    
    useEffect( () => {

        const test = async () => {

            let resultCurrent = await GetAuctions();
            const d = new Date()
            let text = d.toLocaleString("sv-SE");

            var result = resultCurrent.filter(auktion => auktion.slutDatumDTO >= text );
            
            setAuctionlist(result);
        };
        test();

    }, [])

    return(<>
        <div className="active-auction-container">
            <Startview list = {auctionList.reverse()}/>
        </div>
    </>);
};

export default ActiveAuctionContainer;