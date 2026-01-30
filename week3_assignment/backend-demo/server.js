//create HTTP server using express framework
import express from 'express';
import {userApp} from "./APIs/userAPI.js"
import {productApp} from "./APIs/productAPI.js"
//create a serer instance
const app = express();

//body parsing middleware
app.use(express.json())
//checks for any json body is contained then it is converted to the js object before reachind the route




app.use('/user-api', userApp);
app.use('/product-api', productApp);


//assign port number 3000
app.listen(3000,()=>console.log("Server is running on port 3000"));



//create a custom middleware
// function middleware1(req,res,next)
// {
//     console.log("middleware is executed")
//     //send response
//     res.json({"message":"Response from the middleware"})
//     //forward request to next middleware
//    // next()
// }


// //to execute the middleware for every incoming request
// app.use(middleware1)














