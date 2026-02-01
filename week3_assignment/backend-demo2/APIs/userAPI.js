import exp from "express" 

import { UserModel , ProductModel} from "../models/userModel.js";
export const userApp = exp.Router();


userApp.post('/users',async(req,res)=>{
    //get new user from req
    let newUser = req.body;
    let newUserDoc = new UserModel(newUser)
    //save in database
    await newUserDoc.save()
    //send reponse
    res.status(200).json({message:"New user created"})

})

userApp.get('/users',async(req,res)=>{
    //read user from database
    let users=await UserModel.find()
    //send response
    res.status(200).json({message:"Users",payload:users})
    //res.json({message:"User API is working.."})
})

//read user by ObjectID
userApp.get("/users/:id",async(req,res)=>
{
    let objId = req.params.id
    let userObj = await UserModel.findById(objId)
    res.status(200).json({message:"user",payload:userObj})
})
userApp.put("/users/:id",async(req,res)=>{
    //get objectID from url param
    let objId=req.params.id
    let modifiedUser=req.body
    let latestUser = await UserModel.findByIdAndUpdate(objId,
         {$set:{...modifiedUser}},
         {new :true,runValidators:true})//runValidators run the validators during the update operation also 
    res.status(200).json({message:"User modified",payload:latestUser})

})


