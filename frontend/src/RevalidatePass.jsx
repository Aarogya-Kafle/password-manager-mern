import React,{useState} from "react"
import { revalidateUser } from "./api/authApi"
function RevalidatePass()
{
    const userId=sessionStorage.getItem('userId');
    const[enteredPassword,setEnteredPass]=useState("");
    const[msg,setMsg]=useState("");
   async function handleSubmit(e) {
    e.preventDefault();

    if (!enteredPassword) {
        setMsg("Password is required");
        return;
    }

    const result = await revalidateUser(userId, enteredPassword);

    if (result && !result.error) {
        setMsg(result.message);
    } else {
        setMsg(result?.error || "Revalidation failed");
    }

    }
    return(
        <div className="revalidateForm">
      <form onSubmit={handleSubmit}>  
      <h1 style={{textAlign:"center"}}>Revalidate Password</h1>
      <input type="password" placeholder="Enter your current password" value={enteredPassword} onChange={e=>setEnteredPass(e.target.value)}/> <br />
      <button type="submit" style={{marginLeft:"30%"}}>Revalidate Password</button>
      </form>
      {msg && <p>{msg}</p>}
      </div>
    )
}

export default RevalidatePass