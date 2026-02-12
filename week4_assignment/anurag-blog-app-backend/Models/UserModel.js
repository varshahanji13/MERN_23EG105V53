import { Schema,model } from "mongoose";

const userSchema= new Schema(
    {
        firstName:
        {
            type:String,
            required:[true,"First name is required"]
        },
        lastName:{
            type:String,
        
        },
        email:
        {
            type:String,
            required:[true,"Email is required"],
            unique:[true,"Email already registerd"]
        },
        password:
        {
            type:String,
            required:[true,"Password is required"]
        },
        profileImageUrl:
        {
            type:String
        },
        role:
        {
            type:String,
            enum:["USER","AUTHOR","ADMIN"],
            required:[true,"{Value} is an invalid role"]
        },
        isActive:
        {
            type:Boolean,
            default:true
        }

    },
    {
        timestamps:true,
        strict:"throw",
        versionKey:false
    }
)
export const UserTypeModel= model("user",userSchema)