import express from 'express';
import { loginUser,registerUser,revalidateUser } from "../services/authService.js";
export const router=express.Router();
router.post('/register',async(req,res)=>{
    try{
        const {username,masterPass}=req.body;

        const result=await registerUser(username,masterPass)

        res.status(201).json(result)
    }catch(err)
    {
        console.error('Error registering a user',err);
        return res.status(500).json({error:err.message}).end()
    }
})


router.post('/login',async(req,res)=>{
    try{
        const{username,masterPass}=req.body;

        const result=await loginUser(username,masterPass);
        res.status(200).json(result);

    }catch(err)
    {
        console.error('Error loggin in',err);
        return res.status(500).json({error:err.message}).end()
    }
})

router.post('/revalidate',async(req,res)=>{
    try{
        const{userId,enteredPassword}=req.body;
        const result=await revalidateUser(userId,enteredPassword);

        return res.status(200).json(result)
    }catch(err)
    {
        console.error('Error revalidating the password',err)
        return res.status(500).json({error:err.message}).end()
    }
})

