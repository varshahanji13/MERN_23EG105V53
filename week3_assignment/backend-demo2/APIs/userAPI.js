import exp from "express" 

import { UserModel , ProductModel} from "../models/userModel.js";
import { hash,compare } from "bcryptjs";
import jwt from 'jsonwebtoken';
import { verifyToken } from "../middleware/verifyToken.js";

export const userApp = exp.Router();


userApp.post('/users',async(req,res)=>{
    //get new user from req
    let newUser = req.body;
    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //bcrypt-->for hash
    //replace plain password with hashed password
    newUser.password=hashedPassword

    //create a new user document
    let newUserDoc = new UserModel(newUser)
    //save in database
    await newUserDoc.save()
    //send reponse
    res.status(201).json({message:"New user created"})

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

userApp.post("/auth",async(req,res)=>{
    //get user cred object
    let userCred=req.body;
    //check for the usernam
    let userofDB= await UserModel.findOne({username:userCred.username})
    if(userofDB===null)
    {
        return res.status(404).json({message:"Invalid user!"})
    }
    //compare the passwords
    let status =await compare(userCred.password,userofDB.password)
    //if passwords is not matched
    if(status===false)
    {
        return res.status(404).json({message:"Invalid passwords!"})
    }

    //create signed token
    let signedToken = jwt.sign({username:userCred.username},"secretkey",{expiresIn:10})
    //10 for 10sec and "10" for 10 millisec

    
    res.cookie("token",signedToken,{
        httpOnly:true, //httpOnly is enabled 
        secure:false,
        samesite:"lax" //moderate striction
    })

    res.status(200).json({message:"Login success!",token:signedToken})
}
);

//test route
userApp.get("/test",verifyToken,(req,res)=>{
    res.json({message:"Test route"})


})