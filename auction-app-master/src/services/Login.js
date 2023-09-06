const Login  = async (user, pass) =>
{
    console.log(user,pass)
    let url ="https://localhost:7168/api/Login";
    let jsonData = {userName:user, password:pass};
    let val = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }}
        )
        .then(resp => resp);
    if(!val.ok)
    {
        return null;
    }
    return val.json();
}
export default Login;
