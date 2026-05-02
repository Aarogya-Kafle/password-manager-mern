import React,{useState} from 'react'
import { registerUser } from './api/authApi'
import { useNavigate } from 'react-router-dom';
function Register()
{
    const navigate=useNavigate();
    const[username,setUsername]=useState("");
    const[masterPass,setMasterPass]=useState("");
    const[msg,setMsg]=useState("");
    const[successMsg,setSuccessMsg]=useState("");
    async function  handleSubmit(e){
        e.preventDefault();
        if(!username || !masterPass)
            {setMsg("Username and password are required fields!");
        return;}
        if(masterPass.length<8)
            {
                setMsg("Password must be at least of 8 characters")
                return;
            }
        const result = await registerUser(username,masterPass);
        if(result)
           { 
            setSuccessMsg("Successful registration.Now Login");
             
           }
        else
            setMsg("Could not register")
    }
    function handleLogin()
    {
        navigate('/')
    }

    return(
        <>
        <div className="registerForm">
        <form onSubmit={handleSubmit}>
            <h1 style={{textAlign:"center"}}>Register</h1>
            <input type="text" placeholder='Enter a username' value={username} onChange={(e)=>setUsername(e.target.value)}/> <br />
            <input type="password" placeholder='Set a master password' value={masterPass} onChange={(e)=>setMasterPass(e.target.value)} /> <br />
            <button type="submit" >Register</button>
            {msg && (<><p>{msg}</p> </>)}
        </form>
        </div>
         <div className="loginNow">
            {successMsg &&(<><p>{successMsg}</p><button onClick={handleLogin}>Login Now</button></>)}
        </div>
        </>
    )
}
export default Register;