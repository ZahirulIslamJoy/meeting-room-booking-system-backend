import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from '../user/user.validation';
import { AuthControllers } from './auth.controllers';


const router = express.Router();

router.post("/signup" , 
    validateRequest(userValidation.createUserValidationSchema) ,
    AuthControllers.signUp)




export const AuthRoutes = router