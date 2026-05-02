import { useState } from "react";
import { getPasswords } from "./api/passwordApi";
function ViewPassword()
{
    const[msg,setMsg]=useState("");
    const [passwordList,setPasswordList]=useState([]);
    async function handleView()
    {
        const userId=sessionStorage.getItem('userId');
        const result=await getPasswords(userId);
        if (result?.error) {
  setMsg(result.error);
} else if (result.length === 0) {
  setMsg("No passwords saved yet.");
} else {
  setMsg("");
  setPasswordList(result);
}
    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>View Password</h1>
        <button onClick={handleView} className="showList">Password List</button>
        {!msg ? 
        (<ol className="passList">
            {passwordList.map((item,i)=><li key={i} className="listItem">
  {item.siteName} - {item.siteUsername} - {item.sitePassword}
</li>)}
        </ol>) : <p style={{textAlign:"center"}}>{msg}</p> }
        </>
    )

}

export default ViewPassword;