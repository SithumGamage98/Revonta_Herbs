import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

//post function for Sign in
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //Indentify user by using the email
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //Checking password
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //1 st para -> Visible/printed Password / 2nd para -> increpted password (bcrypt is use for create an encript password)
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user), //Create a tocken for the each of the user
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

//For Sign Up
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    //Save new user in the database
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user), //Create a tocken for the each of the user
    });
  })
);

export default userRouter;
