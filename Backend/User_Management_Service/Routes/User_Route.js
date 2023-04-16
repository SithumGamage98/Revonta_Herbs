import express from 'express';
import {
  user_signIn,
  user_signUp,
  user_update,
} from '../Controllers/User_Controller';

const userRouter = express.Router();

userRouter.post('/signin', user_signIn);
userRouter.post('/signup', user_signUp);
userRouter.put('/profile', user_update);

export default userRouter;
