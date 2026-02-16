import exp from "express";
import { register, authenticate } from "../services/authService.js";
import { ArticleModel } from "../Models/ArticleModel.js";

export const userRoute = exp.Router();

//Register user
userRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "USER" });
  //send res
  res.status(201).json({ message: "user created", payload: newUserObj });
});

//Authenticate user
userRoute.post("/authenticate", async (req, res) => {
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
});

//Read all articles(protected route)
userRoute.get('/articles',async(req,res)=>
{
  
})
// Add comment to an article (protected route)
userRoute.post('/articles/comment/:articleId', async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const { comment, userId } = req.body;

    const article = await ArticleModel.findById(articleId);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    article.comments.push({ comment, user: userId });
    await article.save();

    res.status(200).json({
      message: "Comment added",
      payload: article
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
      error: error.message
    });
  }
});
