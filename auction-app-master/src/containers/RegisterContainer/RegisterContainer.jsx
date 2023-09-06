import Register from "../../components/Register/Register";
import RegisterS from "../../services/Register"
import "./RegisterContainer.css"
const RegisterContainer = () =>
{
    const reg = async (user,pass) =>
    {
        RegisterS(user, pass)
    }
    return(<div className="RegisterDiv"><Register reg = {reg}/></div>)
}
export default RegisterContainer;