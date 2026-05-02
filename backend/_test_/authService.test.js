import { registerUser,loginUser,revalidateUser } from "../src/services/authService";
import { User } from "../src/models/User";
import mongoose from "mongoose";
import {describe,test,expect} from '@globals/jest';

describe('testing the user authentication service',()=>{
    test('registration of new user',async()=>{
        const username='Aarogya';
        const masterPass='messi@10argentina2022';

        const createdUser=await registerUser(username,masterPass)
        
        expect(createdUser._id).toBeInstanceOf(mongoose.Types.ObjectId)

        const foundUser=await User.findById(createdUser._id);

        expect(foundUser).toEqual(expect.toContain(createdUser));
        expect(foundUser.createdAt).toBeInstanceOf(Date);
        expect(foundUser.updatedAt).toBeInstanceOf(Date);
    }),

    test('login of existing user',async()=>{
        const userName='Aarogya';
        const masterPass='messi@10argentina2022';

        const loggedInUser=await loginUser(userName,masterPass);

        expect(loggedInUser._id).toBeInstanceOf(mongoose.Types.ObjectId);
        
    })
})