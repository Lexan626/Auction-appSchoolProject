
const GetAuctions = async () =>{
    let url = "https://localhost:7168/api/Auction/GetAllAuktions";
    return await fetch(url, { 
        })
    .then(resp => resp.json());
}

export default GetAuctions
 

