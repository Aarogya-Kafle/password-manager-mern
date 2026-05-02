import fs from 'fs'
import readline from 'readline';
import bcrypt from 'bcrypt'
const rl=readline.createInterface({input:process.stdin,output:process.stdout})
function oldUser()
{
    rl.question("Enter your password:",(pass)=>{
    fs.readFile('secret.txt','utf8',async(err,data)=>{
        if(err)
            console.log('Incorrect Password.Login Failed');
        else{
            if(await bcrypt.compare(pass,data))
                console.log('logged in')
            else
                console.log('failed');
        }
    })
    })
    
}
export default oldUser;