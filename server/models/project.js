import mongoose from "mongoose";
const projectSchema=new mongoose.Schema({
    title:{
        type:String,        
        required:true,
    },
    description:{   
        type:String,
        required:true,
    },      
    techStack:{
        type:[String],
          
    },
    githubLink:{
        type:String,    

    },
    liveDemo:{
        type:String,
    },
    image:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }   
},
{timestamps:true}
)   ;
const project= mongoose.model("Project",projectSchema); 
export default project;
