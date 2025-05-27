import { Router } from 'express';
import {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  updateUserDetails,
  updateUserEmail
} from '../controllers/userController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { registerUserSchema, loginUserSchema, updateUserSchema, updateEmailSchema } from '../schemas/userSchema';

// Artist layout Route
const userRoute = Router();

userRoute.get('', getUsers);
userRoute.get('/:userid', getUser);
userRoute.post('/register', validateSchema(registerUserSchema), registerUser);
userRoute.post('/login', validateSchema(loginUserSchema), loginUser);
userRoute.patch('/:userid', validateSchema(updateUserSchema), updateUserDetails);
userRoute.patch('/updateemail/:userid', validateSchema(updateEmailSchema), updateUserEmail);

export default userRoute;