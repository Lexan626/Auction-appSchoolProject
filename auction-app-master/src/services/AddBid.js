
const AddBid = (id, price) =>
{
    let token2 = JSON.parse(localStorage.getItem("token"))
    let tokenstring = token2.token;
    let url ="https://localhost:7168/api/AddBud" ;
    let jsonData = {summa:price,auktionId:id};

    fetch(url,{
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
        "authorization": `Bearer ${tokenstring}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        }).then(function (data) 
        {
        console.log('Request success: ', 'posten skapad');
    }) 
};
export default AddBid;
