import { NavLink } from "react-router-dom";
import "./AuctioncardStyles.css";
import dayjs from 'dayjs';

const Auctioncard = ({auction}) => {
    const startDate = dayjs(auction.starDatumDTO).format("YYYY-MM-DD HH:mm");
    const endDate = dayjs(auction.slutDatumDTO).format("YYYY-MM-DD HH:mm");

    return(<div className="auction-card">
            <div>
                <h3>{auction.titelDTO}</h3>
                <h3>{auction.beskrivningDTO}</h3>
                <p>Start: {startDate}</p>
                <p>Slut: {endDate}</p>
            </div>
            <NavLink to="/details" state={{auction}}><button className="details-btn">Detaljer</button></NavLink>
          </div>);
}
export default Auctioncard;

