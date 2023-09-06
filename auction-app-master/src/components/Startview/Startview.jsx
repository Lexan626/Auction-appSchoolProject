import Auctioncard from "../Auctioncard/Auctioncard";
import "./StartviewStyles.css";


const Startview = ({list}) =>{

    if(list !== "undefined")
    {
        let auctionlist = list.map(item => {
        
            return(<Auctioncard key={item.auktionIdDTO} auction = {item}/>)
        })

        return(<>
            <h2 className="header-auctions">Pågående auktioner</h2>
            <div className="start-view">
                {auctionlist}
            </div>
        </>);
    }
}
export default Startview;