import { useRef, useState } from 'react';
import "./DetailsStyles.css";
import dayjs from 'dayjs';

const DetailsActive = (props) => 
{
    const bid = useRef();
    let auction = props.Auction;
    let bidList = props.BidList;
    let highestBid = bidList[bidList.length - 1].summa;
    const [num, setNum] = useState(highestBid + 1)

    const startDate = dayjs(auction.startDatumDTO).format("YYYY-MM-DD HH:mm");
    const endDate = dayjs(auction.slutDatumDTO).format("YYYY-MM-DD HH:mm");

    const listItems = bidList.map((bid) =>
        <div>{bid.summa}</div>
    );

    return (<div className="details-card">
                <div>
                    <h2 className="details-header">{auction.titelDTO}</h2>
                    <p className="details-description">{auction.beskrivningDTO}</p>
                </div>

                <div className="price">
                    <p>kr:</p>
                    {listItems[listItems.length - 1]}
                </div>

                <p className="date">Start: {startDate}</p>
                <p className="date">Slut: {endDate}</p>

                <div className="bid-container">
                    <input className="bid-input" type="number" value={num}  ref={bid} onChange={(e) => {
                        let { value, min } = e.target;
                        setNum(Math.max(Number(min), Number(value)));
                    }} min={highestBid + 1} /> 
                    
                    <button className="bid-btn" onClick={() => {
                        props.AddBid(auction.auktionIdDTO, bid.current.value)
                        setNum(parseInt(bid.current.value) + 1)
                        }}>Buda</button>
                </div>

                <p className="info-text">Budet måste vara högre än föregående bud</p>
                <p className="top-margin">Historik:</p>

                <div className="top-margin">
                    {listItems.reverse()}
                </div>
            </div>) 
}
export default DetailsActive;