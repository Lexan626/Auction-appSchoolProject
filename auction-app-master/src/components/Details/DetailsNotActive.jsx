import {useLocation} from 'react-router-dom';
import "./DetailsStyles.css";
import dayjs from 'dayjs';

const DetailsNotActive = (props) =>
{
    const location = useLocation();
    const {auction} = location.state;
    let highestBid = props.HighestBid;
    const startDate = dayjs(auction.startDatumDTO).format("YYYY-MM-DD HH:mm");
    const endDate = dayjs(auction.slutDatumDTO).format("YYYY-MM-DD HH:mm");
    
    return (<div className="details-card">
            <div>
                <h2 className="details-header">{auction.titelDTO}</h2>
                <p className="details-description">{auction.beskrivningDTO}</p>
            </div>

            <div className="price">
                <p>{highestBid}kr</p>
            </div>

            <p className="date">Start: {startDate}</p>
            <p className="date">Slut: {endDate}</p>
        </div>) 
};
export default DetailsNotActive;