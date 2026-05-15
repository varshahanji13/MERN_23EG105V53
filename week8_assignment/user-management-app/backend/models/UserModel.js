import { Schema,model } from "mongoose";
//Create a user schema with validations
//create user model for user schema
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
    },
    dateOfBirth:{
        type:Date,
        required:[true,"DOB is required"]
    },
    mobileNumber:{
        type:Number,
    },
    // for soft delete
    status:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
},
);

//create user model for userschema
export const UserModel=model("user",userSchema)