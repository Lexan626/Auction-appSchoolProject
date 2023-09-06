const Register  = async (user, pass) =>
{
    let url = "https://localhost:7168/api/Register";
    let jsonData= {userName:user, password:pass};
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        }).then(function (data) 
        {
    }); 
}
export default Register;