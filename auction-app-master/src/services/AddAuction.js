const AddAuction = (data) => {    
  //let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbnZhbmRhcklEIjoiNCIsImV4cCI6MTY1MzM5MzA5NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE2OCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNjgifQ.CwoVA-Dq3k7OR9AbHgD83ghZ-wuu6Mw62Gqqqq_wWhk";
  let token2 = JSON.parse(localStorage.getItem("token"))
  let tokenstring = token2.token;
  console.log(tokenstring);
  console.log(token2);
fetch('https://localhost:7168/api/Auction/addAuktion', {
    method: 'POST',
    //Lägg till Authorization i header
    headers: { 
      "authorization": `Bearer ${tokenstring}`,
      "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(() => {
    console.log('Ny auction tillagd');
  })  
}
export default AddAuction;
