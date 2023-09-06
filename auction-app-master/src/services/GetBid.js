
const GetBit = async (id) =>
{
    let token2 = JSON.parse(localStorage.getItem("token"))
    let tokenstring = token2.token;
    console.log(tokenstring);
    console.log(token2);

    let url = "https://localhost:7168/api/GetAllBud/" + id ;
    return await fetch(url,{ 
        headers: { 
        "authorization": `Bearer ${tokenstring}`,
        "Content-Type": "application/json" }})
    .then(resp => resp.json());
}
export default GetBit