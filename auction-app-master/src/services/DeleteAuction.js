
const DeleteAuction = (id) =>
{
   let url = "https://localhost:7168/api/Auction/removeauktion/" + id;
   fetch(url,
   {
      method: 'DELETE'
   });
}
export default DeleteAuction;