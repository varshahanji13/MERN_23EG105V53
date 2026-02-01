import { Schema, model} from "mongoose";


//CREATE USER SCHEMA
const userSchema = new Schema(
    {
        username:{
            type:String, //schema type shuld start with the upper-case
            required:[true,"Username is required"],
            minLength:[4,"Minimum length should be 4 characters"],
            maxLength:[10,"Maximum length exceeded"]

        }
        ,
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        age:{
            type:Number,
            required:[true,"Age is required"],
            min:[18,"Age must be above 18"],
            max:[25,"Age must be below 25"]
        },
    },  {
            strict :"throw",
            timestamps:true
        }
    
);

//CREATE USER MODEL WITH THAT SCHEMA
export const UserModel = model("user",userSchema)//always give singular noun 

const productSchema = new Schema(
    {
        pid:{
            type:Number,
            required:[true,"product id is required"],
             
        },
        productName:
        {
            type:String,
            required:[true,"product name is required"]

        },
        price:
        {
        type:Number,
        required:[true,"product value is required"]

        
    }
    }
   
)
export const ProductModel = model("product",productSchema)