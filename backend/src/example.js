import initDatabase from "./connectDB.js";
import { User } from "./models/User.js";
import bcrypt from 'bcrypt'
await initDatabase();

const user =new User({
    username:"AK",
    masterPasswordHash:await bcrypt.hash("messi10",10)
});

const createdUser=await user.save();

const found =await User.find({_id:createdUser._id});
console.log(found);