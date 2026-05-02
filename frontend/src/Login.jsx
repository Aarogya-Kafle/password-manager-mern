import React,{ useState} from "react";
import { loginUser } from "./api/authApi";
import {useNavigate} from 'react-router-dom';
function Login()
{
    const navigate=useNavigate();
    const [username,setUser]=useState("");
    const[masterPass,setMasterPass]=useState("");
    const[msg,setMsg]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!username || !masterPass)
        {
            setMsg("Username and password are required!");
            return;
        }
        const result=await loginUser(username,masterPass);
        if (result && !result.error)
             {
                sessionStorage.setItem("userId", result.userId);
                sessionStorage.setItem("username", result.username);
                setMsg("Logged in successfully");
                navigate("/dashboard");
                } 
        else {
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("username");
  setMsg(result?.error || "Invalid credentials");
}}
    function handleNew(){
        navigate('/register')
    }
    return( 
    <>
    <h1 style={{textAlign:"center"}}>My Password Manager</h1>
        <div className="loginForm">
        <form onSubmit={handleSubmit}>
            <h1 style={{textAlign:"center"}}>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" value={username}  id="username" onChange={e=>setUser(e.target.value)} placeholder="Enter your username" required/>  <br />
            <label htmlFor="pass">Password</label>
            <input type="password" value={masterPass} id="pass" placeholder="Enter your password" onChange={e=>setMasterPass(e.target.value)} minLength={8}  required/>
            <br />
            <button  type="submit">Login</button>
            {msg && <p>{msg}</p>}
        </form>
        </div>
        <div className="newUser">
        <p>Are you a new user?</p>
        <button onClick={handleNew}>Register now</button>
        </div>
   </>
    )

}
export default Login;