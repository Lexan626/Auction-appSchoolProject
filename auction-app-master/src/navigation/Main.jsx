import {Route, Routes} from 'react-router-dom';
import ActiveAuctionContainer from "../containers/ActiveAuctionContainer/ActiveAuctionContainer";
import AddAuctionContainer from "../containers/AddAuctionContainer/AddAuctionContainer";
import DetailAuctionContainer from "../containers/DetailAuctionContainer/DetailAuctionContainer";
import SearchContainer from "../containers/SearchContainer/SearchContainer";
import UpdateContainer from "../containers/UpdateContainer/UpdateContainer"
import LoginContainer from "../containers/LoginContainer/LoginContainer"
import RegisterContainer from "../containers/RegisterContainer/RegisterContainer"

const Main = () => {
    return(<Routes>
        <Route exact path ="/" element={<LoginContainer />} />
        <Route path="/activeAuctions" element={<ActiveAuctionContainer/>} />
        <Route path="/add" element={<AddAuctionContainer />} />
        <Route path="/details" element={<DetailAuctionContainer/>}></Route>
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/update" element={<UpdateContainer />} />
        <Route path ="/register" element= {<RegisterContainer/>} />
    </Routes>);
};
export default Main;