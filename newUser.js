import readline from'readline';
import bcrypt from 'bcrypt';
import fs from 'fs';
const rl=readline.createInterface({input:process.stdin,output:process.stdout})
 function newUser()
{
    rl.question("Set a new master password:",async(userInput)=>{
        if(userInput.trim()!=="" && userInput.length>=8)
        {
            const hashed=await bcrypt.hash(userInput,10);
            fs.writeFile("secret.txt",hashed,(err)=>{
                if(err) console.log('Error storing the hashed password')
                else
                    console.log('Successfully stored the hashed password');
            })
            rl.close();
        }
        else
            rl.setPrompt('Empty entry. Enter a valid password!')
           rl.prompt();
            rl.on('line',async(pass)=>{
                if(pass.trim()!=="" && pass.length>=8)
                {
                    const hashed=await bcrypt.hash(pass,10);
                    fs.writeFile("secret.txt",hashed,(err)=>{
                        if(err) console.log(err);
                        else console.log('success');
                    })
                    rl.close();
                }
                else{
                    rl.setPrompt("invalid")
                    rl.prompt();
                }
            })
    })
}
rl.on('close',()=>{
    console.log("Password hashed and stored successfully");
})
export default newUser;