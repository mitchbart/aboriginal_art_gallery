import { Router } from 'express';
import {
  getUsers,
  getUser,
  registerUser,
  loginUser
} from '../controllers/userController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { registerUserSchema, loginUserSchema } from '../schemas/userSchema';

// Artist layout Route
const userRoute = Router();

userRoute.get('', getUsers);
userRoute.get('/:userid', getUser);
userRoute.post('/register', validateSchema(registerUserSchema), registerUser);
userRoute.post('/login', validateSchema(loginUserSchema), loginUser);

export default userRoute;