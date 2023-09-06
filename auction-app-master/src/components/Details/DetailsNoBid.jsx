import { useRef, useState } from "react";
import {useLocation} from "react-router-dom";
import DeleteAuction from "../../services/DeleteAuction"
import { NavLink } from "react-router-dom";
import "./DetailsStyles.css";
import dayjs from 'dayjs';

const DetailsNoBid = (props) =>
{
    const location = useLocation();
    const {auction} = location.state;
    const sum = useRef();
    const [num, setNum] = useState(auction.utropsprisDTO+1);
    const startDate = dayjs(auction.startDatumDTO).format("YYYY-MM-DD HH:mm");
    const endDate = dayjs(auction.slutDatumDTO).format("YYYY-MM-DD HH:mm");

    return (<>
        <div className="details-card">
            <div>
                <h2 className="details-header">{auction.titelDTO}</h2>
                <p className="details-description">{auction.beskrivningDTO}</p>
            </div>

            <div className="price">
                <p>{auction.utropsprisDTO}kr</p>
            </div>

            <p className="date">Start: {startDate}</p>
            <p className="date">Slut: {endDate}</p>

            <div className="bid-container">
                <input className="bid-input" type="number" value={num} ref={sum} onChange={(e) => {
                    let { value, min } = e.target;
                    setNum(Math.max(Number(min), Number(value)));
                }} min = {auction.utropsprisDTO +1}/>

                <button className="bid-btn" onClick={() => props.AddBid(auction.auktionIdDTO, sum.current.value)}>Buda</button>
            </div>

            <p className="info-text">Budet måste vara högre än utropspris</p>

            <div className="update-delete-btn">
                <NavLink to="/update" state={{auction}}><button className="bid-btn">Uppdatera auktion</button></NavLink>
                <button className="bid-btn" onClick={() => DeleteAuction(auction.auktionIdDTO)}>Ta bort auktion</button>
            </div> 
        </div>
        </>) 
};
export default DetailsNoBid; 