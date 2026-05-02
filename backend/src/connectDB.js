import mongoose from 'mongoose';

function initDatabase()
{
    const DATABASE_URL=process.env.DATABASE_URL;
    if(!DATABASE_URL)
    {
       throw new Error('No database url found');
    }

    mongoose.connection.on('open',()=>{
        console.info('Successfully connected to DB');
    })

    const connection=mongoose.connect(DATABASE_URL);
    return connection;
}

export default initDatabase;