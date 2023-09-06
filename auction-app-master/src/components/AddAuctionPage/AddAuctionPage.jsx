import dayjs from "dayjs";
import { useState } from "react";
import AddAuction from "../../services/AddAuction";

const AddAuctionPage = (e) => {
    
        const [titelDTO, setTitle] = useState('');
        const [beskrivningDTO, setBeskrivning] = useState('');
        const [slutDatumDTO, setSlutDatum] = useState('');
        const [utropsprisDTO, setUtropspris] = useState('');
        //const [SkapadAv, setSkapadAv] = useState('');
 
        const handleSubmit = (e) => {
          e.preventDefault();
          
          
          let starDatumDTO = dayjs();
          const data = { titelDTO, beskrivningDTO, slutDatumDTO, starDatumDTO ,utropsprisDTO };

          AddAuction(data);
        }

    return ((
        <div className="add-auction-container">
          <h2 className="header-auctions">Lägg till en auktion</h2>
          <form className="add-auction-form" onSubmit={handleSubmit}>
            <label>Titel:</label>
            <input 
              type="text" 
              required 
              value={titelDTO}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Beskrivning:</label>
            <input 
              type="text" 
              required 
              value={beskrivningDTO}
              onChange={(e) => setBeskrivning(e.target.value)}
            />
            <label>Slutdatum: yyyy-mm-dd</label>
            <input 
              type="text" 
              required 
              value={slutDatumDTO}
              onChange={(e) => setSlutDatum(e.target.value)}
            />
            <label>Utropspris:</label>
            <input 
              type="text" 
              required 
              value={utropsprisDTO}
              onChange={(e) => setUtropspris(e.target.value)}
            />
            {/* <label>Skapad av:</label>
            <input 
              type="text" 
              required 
              value={SkapadAv}
              onChange={(e) => setSkapadAv(e.target.value)}
            /> */}
            <button className="add-btn">Lägg till auktion</button>
          </form>
        </div>
      )
    )
}
export default AddAuctionPage;


