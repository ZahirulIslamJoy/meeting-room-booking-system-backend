import express from 'express';
import { UserControllers } from './user.controllers';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';


const router = express.Router();

router.post("/signup" , 
    validateRequest(userValidation.createUserValidationSchema) ,
    UserControllers.createUser)




export const UserRoutes = router