import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthControllers } from './auth.controllers';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.signUpValidationSchema),
  AuthControllers.signUp,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.login,
);

export const AuthRoutes = router;
