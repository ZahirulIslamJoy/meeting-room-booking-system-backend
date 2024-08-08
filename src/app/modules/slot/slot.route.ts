import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SlotValidaion } from './slot.validation';
import { SlotControllers } from './slot.controllers';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(SlotValidaion.createSlotValidationSchema),
  SlotControllers.createSlot,
);

router.get(
    '/availability',
    SlotControllers.getSlot,
  );

export const SlotRoutes = router;
