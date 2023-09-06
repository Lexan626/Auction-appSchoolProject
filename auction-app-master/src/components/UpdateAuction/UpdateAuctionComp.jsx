import { useState } from "react";
import {useLocation} from "react-router-dom";
import dayjs from "dayjs";
import UpdateAuction from '../../services/UpdateAuction'

const UpdateAuctionComp = () => 
{
    const location = useLocation();
    const info = location.state.auction;
    const auktionIDDTO = info.auktionIdDTO;
    
      const [titelDTO, setTitle] = useState('');
      const [beskrivningDTO, setBeskrivning] = useState('');
      const [slutDatumDTO, setSlutDatum] = useState('');
      const [utropsprisDTO, setUtropspris] = useState('');
      //const [SkapadAv, setSkapadAv] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        
        
        let starDatumDTO = dayjs();
        const data = { titelDTO, beskrivningDTO, slutDatumDTO, starDatumDTO ,utropsprisDTO,auktionIDDTO};
        
        UpdateAuction(auktionIDDTO,data);
      }

    return ((
        <div className="add-auction-container">
          <h2 className="header-auctions">Uppdatera Auktion</h2>
          <form className="add-auction-form" onSubmit={handleSubmit}>
            <label>Föregående titel: {info.titelDTO}</label>
            <input 
              type="text" 
              required 
              value={titelDTO}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Föregående beskrivning: {info.beskrivningDTO}</label>
            <input 
              type="text" 
              required 
              value={beskrivningDTO}
              onChange={(e) => setBeskrivning(e.target.value)}
            />
            <label>Föregående slut datum: {info.slutDatumDTO}</label>
            <input 
              type="text" 
              required 
              value={slutDatumDTO}
              onChange={(e) => setSlutDatum(e.target.value)}
            />
            <label>Föregående utropspris: {info.utropsprisDTO}</label>
            <input 
              type="text" 
              required 
              value={utropsprisDTO}
              onChange={(e) => setUtropspris(e.target.value)}
            />
            <button className="add-btn">Uppdatera Auktion</button>
          </form>
        </div>
      )
    )    
}

export default UpdateAuctionComp;