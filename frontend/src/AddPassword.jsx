import { useState } from "react";
import { addPassword } from "./api/passwordApi"
function AddPassword()
{
    const [msg,setMsg]=useState("");
    const[siteName,setSiteName]=useState("");
    const[siteUrl,setSiteUrl]=useState("");
    const[siteUserName,setSiteUserName]=useState("");
    const[sitePassword,setSitePassword]=useState("");
    async function handleSubmit(e){
        e.preventDefault();
        if(!siteName || !siteUrl || !sitePassword || !siteUserName)
        {
            setMsg("All fields are required!");
            return;
        }
        else{
            const result=await addPassword(userId,siteName,siteUrl,siteUserName,sitePassword);
            setMsg("Password added successfully")
            setSiteName("");
            setSitePassword("");
            setSiteUrl("");
            setSiteUserName("");
        }
    }
    const userId=sessionStorage.getItem('userId');
    return (
        <div className="addPassForm">
        <form onSubmit={handleSubmit} >
        <h1 style={{textAlign:"center"}}>Add Password</h1>
        <label htmlFor="sn">Site Name</label>
        <input type="text" id="sn" value={siteName} placeholder="Site Name" onChange={e=>setSiteName(e.target.value)}/> <br />
        <label htmlFor="su">Site URL</label>
        <input type="text"  id="su" value={siteUrl} placeholder="Site URL" onChange={e=>setSiteUrl(e.target.value)}/> <br />
        <label htmlFor="user"> Site Username</label>
        <input type="text" id="user" value={siteUserName} placeholder="Site Username"onChange={e=>setSiteUserName(e.target.value)}/> <br />
        <label htmlFor="pass">Site Password</label>
        <input type="password" id="pass" value={sitePassword} placeholder="Site Password"onChange={e=>setSitePassword(e.target.value)} />
        <button type="submit" style={{marginLeft:"35%"}}>Add Password</button>
        </form>
        {msg && <p>{msg}</p>}
        </div>
    )
}

export default AddPassword