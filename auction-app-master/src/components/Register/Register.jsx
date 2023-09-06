import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css"
const Register = ({reg}) =>
{
    const user = useRef();
    const pass = useRef();
return(<div className="div-register-form">
        <h1 className="headerTitle">Registrera</h1>
        <label className="labels">Användarnamn</label>
        <input className="inputs" type= "text" ref={user} placeholder="Användarnamn" />
        <label className="labels">Lösenord</label>
        <input className="inputs" type="password" ref={pass} placeholder ="Lösenord" />
        <button className="knappis" onClick={ () => reg(user.current.value, pass.current.value)}>Registrera</button>
    </div>);
}
export default Register;