import readline from 'readline'
import promptNewUser from './newUser.js';
import promptOldPass from './oldUser.js';
const rl=readline.createInterface({input:process.stdin,output:process.stdout});

rl.question("Are you a new user  (y/n) ?",(userInput)=>{
    if(userInput.toLowerCase()==='y')
        promptNewUser();
    else
        promptOldPass();

});
