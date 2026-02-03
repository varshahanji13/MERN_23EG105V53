import { Schema,model } from "mongoose";

const productSchema= new Schema(
    {
        productName:
        {
            type:String,
            required:[true,"Product name is required"]

        },
        price:
        {
            type:Number,
            required:[true,"Price is required"]
        },
        brand:
        {
            type:String,
            required:[true,"Brand is required"]
        }
    },{
    strict:"throw",
    timestamps:true
}
)
export const ProductModel = model("product",productSchema)