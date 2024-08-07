import express from 'express';
import { UserControllers } from './user.controllers';


const router = express.Router();

router.post("/signup" , UserControllers.createUser)






export const UserRoutes = router