const UpdateAuction = (AuktionID,data) =>
{
  let token2 = JSON.parse(localStorage.getItem("token"))
  let tokenstring = token2.token;

    fetch('https://localhost:7168/api/Auction/updateauktion', {
    method: 'PUT',
    headers: { 
      "authorization": `Bearer ${tokenstring}`,
      "Content-Type": "application/json" },
    body: JSON.stringify(data)   
  }).then(() => {
    console.log('Uppdaterad');
  })  
}

export default UpdateAuction;

    
