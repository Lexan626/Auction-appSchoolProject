import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./LoginStart.css"

const LoginStart =({login}) =>
{
    const user = useRef();
    const pass = useRef();
    
    return(<>
    <div className="div-register-form">
        <h1 className="headerTitle">Logga in</h1>
        <label className="labels">Användarnamn</label>
        <input input className="inputs" type= "text" ref={user} placeholder="Användarnamn" />
        <label className="labels">Lösenord</label>
        <input input className="inputs" type="password" ref={pass} placeholder ="Lösenord" />
        <button className="knappis" onClick={ () => login(user.current.value, pass.current.value)}>Logga in</button>
        <NavLink to="/register" className="knappis" id="Register"><span>Registrera dig</span></NavLink>
    </div>
        </>);
}
export default LoginStart;