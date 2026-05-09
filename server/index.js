import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import project from "./models/project.js";
import projectRoute from "./routes/projectRoute.js";
import profileRoute from "./routes/profileRoute.js";
import cookieParser from "cookie-parser";
import contactRoute from "./routes/contactRoute.js";
dotenv.config();
connectDB(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//routes

app.use("/api/users",userRoute);
app.use("/api/projects",projectRoute);
app.use("/api/profile",profileRoute);
app.use("/api/contact",contactRoute);

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})