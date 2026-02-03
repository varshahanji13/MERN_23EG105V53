import exp from "express";
import { ProductModel } from "../Models/ProductModel.js";
export const productApp = exp.Router();

productApp.get('/products',async(req,res)=>{
    let product=await ProductModel.find()
    res.status(200).json({message:"Products",payload:product})

})

productApp.post('/products',async(req,res)=>
{
    let newProduct = req.body;
    let newProductDoc = new ProductModel(newProduct)
    //save in database
    await newProductDoc.save()
    //send reponse
    res.status(200).json({message:"New product created"})
})

