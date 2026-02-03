import { Schema,Types,model } from "mongoose";


const cartSchema=new Schema({
    product:
    {
        type:Schema.Types.ObjectId,
        ref:"product" // name of the product model
    },
    quantity:
    {
        type:Number,
        default:1
    }
})
const userSchema= new Schema({
    name:
    {
        type:String,
        required:[true,"Name is required"]
    },
    email:
    {
        type:String,
        required:[true,"Email is required"],
        unique:true // add to index

    },
    password:
    {
        type:String,
        required:[true,"Password is required"]
    },
    cart:
    {
        type:[cartSchema],
        

    }

})
export const UserModel = model("user",userSchema)