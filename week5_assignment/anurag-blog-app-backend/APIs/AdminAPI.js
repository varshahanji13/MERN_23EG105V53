import exp from 'express'
import { ArticleModel } from '../Models/ArticleModel.js';
import { UserTypeModel } from '../Models/UserModel.js';
export const adminRoute = exp.Router();

//read all articles
adminRoute.get('/articles',async(req,res)=>
{
    let articles =await ArticleModel.find({isArticleActive:true})
    if(!articles)
    {
        res.status(401).json({message:"Articles not found"})
    }
    res.status(200).json({message:"Articles",payload:articles})
})

//block or unblock users
adminRoute.post('/block-unblock/:id', async (req, res) => {
  const user = await UserTypeModel.findByIdAndUpdate(
    req.params.id,
    { $set: { isActive: false } },
    { new: true }
  );

  res.status(200).json({
    message: "User updated successfully",
    payload: user
  });
});
