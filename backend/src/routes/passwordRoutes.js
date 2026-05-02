import express from 'express';
import { addPassword,getPasswords } from "../services/passwordService.js";
export const router=express.Router();
router.post('/',async(req , res)=>{
    try{
        const {userId,siteName,siteUrl,siteUsername,sitePassword}=req.body;

        const result=await addPassword(userId,siteName,siteUrl,siteUsername,sitePassword)
        return res.status(201).json(result)
    }catch(err){
        console.log('Error adding a password',err)
        return res.status(500).json({error:err.message}).end()
    }
})

router.get('/:userId',async(req ,res)=>{
    try{
        const {userId}=req.params;

        const result = await getPasswords(userId);
        if(result.length===0)
            return res.status(200).json([]).end();
        return res.status(200).json(result);
    }catch(err)
    {
        console.log('error viewing the paswords',err)
        return res.status(500).json({error:err.message}).end()
    }
})