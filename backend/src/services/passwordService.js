import { Password } from "../models/Password.js"

export async function addPassword(userId,siteName,siteUrl,siteUsername,sitePassword)
{
    if(!userId || !siteName || !siteUrl || !siteUsername || !sitePassword)
        throw new Error('All fields are reuired!')
    const createdPassword=new Password({userId:userId,siteName:siteName,siteUrl:siteUrl,siteUsername:siteUsername,sitePassword:sitePassword});
    await createdPassword.save();
   return {message:'New Password added successfully!'}
}

export async function getPasswords(userId)
{
    const allPasswords=await Password.find({userId}).sort({createdAt:-1});
    // const sortedPass=allPasswords.sort((a,b)=>a.createdAt-b.createdAt);

    return allPasswords;
}