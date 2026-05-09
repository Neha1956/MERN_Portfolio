import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        /*minlength:6 ,
        description: "password should be at least 6 characters long",
        maxlength:10,
        description: "password should be at most 10 characters long",*/
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    date:{
        type:Date,
        default:Date.now,
    }
    
},
{timestamps:true}
)

const user=mongoose.model("User",userSchema);
export default user;