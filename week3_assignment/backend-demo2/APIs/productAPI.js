import exp from "express" 

import {ProductModel} from "../models/userModel.js";
export const productApp = exp.Router();
 
productApp.post('/products',async(req,res)=>{
    //get new user from req
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct)
    //save in database
    await newProductDoc.save()
    //send reponse
    res.status(200).json({message:"New product created"})

})
productApp.get('/products',async(req,res)=>{
    //read user from database
    let product=await ProductModel.find()
    //send response
    res.status(200).json({message:"Products",payload:product})
    //res.json({message:"User API is working.."})
})
productApp.get("/products/:id",async(req,res)=>{
    let objId=req.params.id
    let productObj=await ProductModel.findById(objId)
    res.status(200).json({message:"Product",payload:productObj})
})
productApp.put("/products/:id",async(req,res)=>{
    //get objectID from url param
    let objId=req.params.id
    let modifiedProduct=req.body
    let latestProduct = await ProductModel.findByIdAndUpdate(objId,
         {$set:{...modifiedProduct}},
         {new :true})
    res.status(200).json({message:"Product modified",payload:latestProduct})

})