import { User } from "../models/User.js";
import bcrypt from 'bcrypt';

export async function registerUser( userName, masterPass)
{
    if(!userName || ! masterPass)
    {
        throw new Error('User name and password must not be empty!')
    }
    if(masterPass.length<8)
        throw new Error('Password must have a minimum length of 8 characters!');
    const existingUser=await User.findOne({username:userName});
    if(!existingUser)
    {
        const hashedPass=await bcrypt.hash(masterPass,10);
        const createdUser=new User({username:userName,masterPasswordHash:hashedPass})
        await createdUser.save();
        console.log('Registered successfully');
         return {
        userId:createdUser._id,
        username:createdUser.username
    }
    }
    else{
        throw new Error('User already registered!');
    }
   
}

export async function loginUser(userName,masterPass)
{
    if(!userName || ! masterPass)
    {
        throw new Error('User name and password must not be empty!')
    }
    const existingUser=await User.findOne({username:userName});
    if(existingUser)
    {
        if(await bcrypt.compare(masterPass,existingUser.masterPasswordHash))
            { 
                return {
                    userId:existingUser._id,
                    username:existingUser.username
                }
            }
        else
           throw new Error('Incorrect master password!')
    }
    else{
        throw new Error('User does not exist')
    }
   
}

export async function revalidateUser(userId,enteredPass)
{
    const existingUser=await User.findById(userId);
    if(!existingUser)
        throw new Error('User does not exist');
    if(await bcrypt.compare(enteredPass,existingUser.masterPasswordHash))
        return {message:'Master password revalidated successfully!'};
    else
        throw new Error('Revalidation failed.Wrong master password!');
}