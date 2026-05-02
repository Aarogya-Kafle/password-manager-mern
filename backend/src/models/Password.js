import mongoose,{Schema} from "mongoose";
const passSchema=new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'user'},
    siteName:String,
    siteUrl:String,
    siteUsername:String,
    sitePassword:{type:String,required:true},
},{timestamps:true});

export const Password=mongoose.model('password',passSchema);