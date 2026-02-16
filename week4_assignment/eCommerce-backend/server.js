import exp from "express";
import { connect } from "mongoose";
import { userApp } from "./APIs/userAPI.js "
import { productApp } from "./APIs/productAPI.js";
const app=exp();
const port=4000

//Connect to the database 
async function connectDB()
{
    try{
        await connect("mongodb://localhost:27017/ecommerceDb");
        console.log("Database connection successful!")
        app.listen(port,()=>console.log("Server is listening 4000..."))
    } catch(err) {
        console.log("Error connection to database !");
    }
}

connectDB();
//body parser middleware
app.use(exp.json())

//forward to specific APIs
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error-handling middleware
app.use((err,req,res,next)=>
{
    res.json({message:"Error",reason:err.message})
})

