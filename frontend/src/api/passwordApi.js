const APIURL='http://localhost:3000/api/passwords';


export async function addPassword(userId,siteName,siteUrl,siteUsername,sitePassword) {
   return await fetch(`${APIURL}/`,{
    headers:{'Content-Type':'application/json'},
    method:'POST',
    body:JSON.stringify({userId,siteName,siteUrl,siteUsername,sitePassword})
   }) .then(res=>res.json())
   .catch(err=>console.log('Error adding a password',err))
}

export async function getPasswords(userId)
{
    return await fetch(`${APIURL}/${userId}`)
    .then(res=>res.json())
    .catch(err=>console.log('Error listing the passwords',err))
}

