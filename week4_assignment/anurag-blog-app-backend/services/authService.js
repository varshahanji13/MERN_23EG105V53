import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserTypeModel } from "../Models/UserModel.js";
import {config} from 'dotenv'

//register function
export const register = async(userObj)=>
{
    //create a document
    const userDoc= new UserTypeModel(userObj);
    //validate the empty passwords 
    await userDoc.validate();
    //hash and replace plain password
    userDoc.password = await bcrypt.hash(userDoc.password,10);
    //save
    const created = await  userDoc.save();
    //convert document to object to remove password
    const newUserObj = created.toObject();
    //remove password
    delete newUserObj.password;
    //return user obj without passwod
    return newUserObj;

}
//authenticate funtion
export const authenticate = async({email,password})=>
{
    const user = await UserTypeModel.findOne({email})
    if(!user)
    {
         const err = new Error("Invalid email")
         err.status = 401;
         throw err;
    }


//compare passwords
const isMatch = await bcrypt.compare(password,user.password)
if(!isMatch)
{
    const err = new Error("Invalid password");
    err.status=401;
    throw err;
}

//check user is active or not

if(user.isActive === false)
{
    const err = new Error("Your account blocked. Please contact Admin");
    err.status=403;
    throw err;
}

//generate token
const token = jwt.sign({userId:user._id, role:user.role, email:user.email},
    process.env.JWT_SECRET,{ expiresIn:"1hr"})

 const userObj = user.toObject();
  delete userObj.password;

  return { token, user: userObj };
};