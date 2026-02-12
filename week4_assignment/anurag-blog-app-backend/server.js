import exp from 'express'
import {connect} from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/UserAPI.js'
import {authorRoute} from './APIs/AuthorAPI.js'
import { adminRoute} from './APIs/AdminAPI.js'
import { commonRoute } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser';


config()//process.env
const app=exp()
app.use(cookieParser())
//add body parser middleware
app.use(exp.json())
//connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRoute)



const connectDB = async()=>
{ 
    try{
    await connect(process.env.DB_URL)
    console.log("Database connection successful!")
    app.listen(process.env.PORT,()=>console.log("Server started.."))
    }
    catch(err)
    {
        console.log("Error in connecting to database")
    }
}
connectDB()

//dealing with invalid path
app.use((req,res,next)=>
{
    res.json({message:"Invalid path"})
})

//error handling middleware
app.use((err,req,res,next)=>
{
    console.log("Error",err)
    res.json({message:"Error",reason:err.message})
})

