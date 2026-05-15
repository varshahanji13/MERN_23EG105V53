import exp from 'express'
import { UserModel } from '../models/UserModel.js';
export const UserApp=exp.Router();

//Create min-express app

//USER API ROUTEs

//create user
UserApp.post('/users',async(req,res)=>{
    const newUser=req.body
    //create user doc
    const newUserDocument=new UserModel(newUser);
    //save new user
    await newUserDocument.save()
    //send res
    res.status(201).json({message:"user created"})
})
//read all users
UserApp.get('/users',async(req,res)=>{
    let usersList=await UserModel.find({status:true});
    //send res
    res.status(200).json({message:"users",payload:usersList})
})
//read a user by id

UserApp.get('/users/:id',async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //find user by id
    let user=await UserModel.findOne({_id:uid,status:true});
    //check user
    if(!user){
        res.status(404).json({message:"user not found",payload:user});
    }
    //send res
    res.status(200).json({message:"user found",payload:user});
})
//delete a user by id
UserApp.put('/users/:id',async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //find user and change status to false
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}});
    //check user
    if(!user){
        res.status(404).json({message:"user not found",payload:user});
    }
    //send res
    res.status(200).json({message:"user removed"});
})


//Activate the user
UserApp.patch('/users/:id',async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //find user and change status to false
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true});
    //send res
    res.status(200).json({message:"user activated",payload:user});
})