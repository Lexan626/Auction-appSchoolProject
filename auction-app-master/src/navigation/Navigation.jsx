import { NavLink } from "react-router-dom";
import "./NavigationStyles.css";

const Navigation = () =>{
    return(<>
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item"><NavLink to="/activeAuctions">Start</NavLink></li>
                <li className="nav-item"><NavLink to="/add">Skapa</NavLink> </li>
                <li className="nav-item"><NavLink to="/search">Sök</NavLink></li>
                <li className="nav-item"><NavLink to="/">Konto</NavLink></li>
            </ul>
        </nav>
    </>);
};

export default Navigation;