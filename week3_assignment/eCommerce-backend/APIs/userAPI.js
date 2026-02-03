import exp from "express" 
import { UserModel } from "../Models/UserModel.js";
import { hash,compare } from "bcryptjs";
import { ProductModel } from "../Models/ProductModel.js";
//import jwt from 'jsonwebtoken';

export const userApp = exp.Router();

userApp.get('/users',async(req,res)=>
{
    let user=await UserModel.find()
    res.status(200).json({message:"Users",payload:user})
})
userApp.post('/users',async(req,res)=>{
    //get new user from req
    let newUser = req.body;
    //validate the user to check the password if it is empty
        await UserModel(newUser).validate();
    /*TRAP - when password is empty still the user is created because empty string is hashed and checked for validators 
    and inserted into db so first the validators are been run then hashed */



    //hash the password
    let hashedPassword=await hash(newUser.password,12)
    //bcrypt-->for hash
    //replace plain password with hashed password
    newUser.password=hashedPassword

    //create a new user document
    let newUserDoc = new UserModel(newUser)
    //save in database
    await newUserDoc.save({validateBeforeSave:false})
    //send reponse
    res.status(201).json({message:"New user created"})

})
/*
//add a product to the cart
userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>
{
    //read uid and pid from url paramater
    let {uid,pid}=req.params; //{uid:"" , pid:""}
    //check user
    let user= await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"User not found!"})
    }
    //check product
    let product= await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found!"})
    }

    //perform the update
    let modifiedUser = await UserModel.findByIdAndUpdate(
        
            uid,
            {$push:{cart:{product:pid}}},
            {new:true}
        
        
    )
    .populate("cart.product") //to get the complete data when user adds new item in cart
    res.status(200).json({message:"Product added to the cart",payload:modifiedUser})

})
*/

//increament the quantity 
userApp.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>
{
    //read uid and pid from url paramater
  const {uid,pid}=req.params; //{uid:"" , pid:""}
    //check user
  const user= await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"User not found!"})
    }
    //check product
   const product= await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found!"})
    }
    let modifiedUser;
    const productIndex = user.cart.findIndex(item=>item.product.equals(pid) )
     if ( productIndex !== -1) {
    user.cart[productIndex].quantity += 1;
    await user.save();
    modifiedUser = await user.populate("cart.product")
   } 
   else{
   // product not exists → push new
   //perform the update
   modifiedUser = await UserModel.findByIdAndUpdate(
        
            uid,
            {$push:{cart:{product:pid,quantity:1}}},
            {new:true}
        
    
    )
    .populate("cart.product") //to get the complete data when user adds new item in cart


}
     res.status(200).json({message:"Product added to the cart",payload:modifiedUser})


})

//read user by Id
userApp.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params
    let user= await UserModel.findById(uid).populate("cart.product","productName price")//second argument is used to get specific field only
    //shuld mention the complete refernce -->works as the joints which is used to retrieve data from 2 collections 

    //response
    res.status(200).json({message:"User",payload:user})

})