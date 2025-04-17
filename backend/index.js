require('dotenv').config();
const express= require("express")
const app= express()
const cors=require("cors")
const server= require("./db")
server()
app.use(express.json())
const coresoption = {
    origin: `${process.env.FRONTEND_URL}`,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH'], // Ensure methods are in an array
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'],
    credentials: true, // Allow cookies/auth headers
    optionsSuccessStatus: 200 // Fixes some browser CORS issues
}
app.use(cors(coresoption));
app.get("/",(req,res)=>{
    return res.status(200).json({"message":"code run"})
})

app.use("/api/v1/userauth",require("./routes/auth"));

app.listen(process.env.PORT,()=>{
    console.log(`the app is run in ${process.env.PORT} port `)
})