import exp from 'express'
import { authenticate } from '../services/authService.js';
import { verifyToken } from "../middlewares/verifyToken.js";


export const commonRoute=exp.Router()

//login
commonRoute.post("/login",async(req,res)=>{
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
})



//logout
//logout for User, Author and Admin
commonRoute.get('/logout', (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie('token', {
    httpOnly: true, // Must match original  settings
    secure: false,   // Must match original  settings
    sameSite: 'lax' // Must match original  settings
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
});

// change password
commonRoute.put('/change-password', verifyToken, async (req, res) => {
  const { currentPass, newPassword } = req.body;

  const user = await UserTypeModel.findById(req.userId);

  const isMatch = await bcrypt.compare(currentPass, user.password);
  if (!isMatch)
    return res.status(401).json({ message: 'Wrong current password' });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ message: 'Password changed' });
});
