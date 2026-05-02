
const APIURL='http://localhost:3000/api/auth';

export async function registerUser(username,masterPass)
{
    return await fetch(`${APIURL}/register`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,masterPass})
    }).then(res=>res.json())
    .catch((err)=>console.log('Error registering user',err));
}

export async function loginUser(username,masterPass)
{
    return await fetch(`${APIURL}/login`,{
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body:JSON.stringify({username,masterPass})
    }).then(res=>res.json())
    .catch(err=>console.log('Error logging in',err))
}

export async function revalidateUser(userId,enteredPassword)
{
    return await fetch(`${APIURL}/revalidate`,{
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body:JSON.stringify({userId,enteredPassword})
    }).then( res=>res.json())
    .catch(err=>console.log('Error revalidating user',err))
}

