import LoginStart from "../../components/LoginStart/LoginStart";
import Login from "../../services/Login";
import "./Login.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
const LoginContainer = () =>
{
    const [token, setToken] = useState();
    let nav = useNavigate();
    const login = async (user,pass) =>
    {
        let res = await Login(user, pass);
        setToken(res);
        localStorage.setItem('token', JSON.stringify(res));
        console.log(res);
        if (res != null) 
        {
            return nav("/activeAuctions");
        }
    }
    return(<div className="LoginDiv"><LoginStart login = {login}/></div>)
}
export default LoginContainer;