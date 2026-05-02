import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  {router as authRoutes} from './routes/authRoutes.js';
import {router as passwordRoutes} from './routes/passwordRoutes.js'
import dotenv from 'dotenv';
import initDatabase from './connectDB.js'

dotenv.config();

export const app=express();
app.use(bodyParser.json())
app.use(cors())
app.use('/api/auth',authRoutes)
app.use('/api/passwords',passwordRoutes)
app.get('/',(req , res)=>{
    res.send('Connecting to the server');
})

await initDatabase();

app.listen(process.env.PORT,process.env.HOST,()=>{
    console.log(`server lsitening at http://${process.env.HOST}:${process.env.PORT}`)
})

