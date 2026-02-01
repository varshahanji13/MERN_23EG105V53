import exp from "express" 
import {userApp} from "./APIs/userAPI.js"
import { productApp } from "./APIs/productAPI.js"
import { connect } from "mongoose"
const app=exp()
const port=4000;

//connect to db server
async function connectDB()
{
    // connect('mongodb://localhost:27017')
    // .then(()=>console.log("Connected to the database"))
    // .catch((error)=>console.log("Error , Could'nt connect to the database",error))
    try
    {
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("Database connection success!")
        app.listen(port,()=>console.log("Server is listening on port 4000..."));
    }
    catch(error)
    {
        console.log("Error connecting to database")
    }
}
connectDB()
app.use(exp.json())
app.use("/user-api",userApp)
app.use("/product-api",productApp)


//error handling middleware- default error handler
// function errorHandler(err,req,res,next)
// {
//     res.json({message:"error",reason:err.message})
// }
// app.use(errorHandler)

app.use((err,req,res,next)=>
{
    res.status(200).json({message:"error",reason : err.message})
})