import { Router } from 'express';
import {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
  deleteUser
} from '../controllers/userController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { 
  registerUserSchema, 
  loginUserSchema, 
  updateUserSchema, 
  updateEmailSchema,
  updatePasswordSchema
} from '../schemas/userSchema';

// User layout Route
const userRoute = Router();

userRoute.get('', getUsers);
userRoute.get('/:userid', getUser);
userRoute.post('/register', validateSchema(registerUserSchema), registerUser);
userRoute.post('/login', validateSchema(loginUserSchema), loginUser);
userRoute.patch('/:userid', validateSchema(updateUserSchema), updateUserDetails);
userRoute.patch('/updateemail/:userid', validateSchema(updateEmailSchema), updateUserEmail);
userRoute.patch('/updatepassword/:userid', validateSchema(updatePasswordSchema), updateUserPassword);
userRoute.delete('/:userid', deleteUser);

export default userRoute;