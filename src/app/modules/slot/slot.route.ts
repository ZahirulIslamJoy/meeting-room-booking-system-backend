import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SlotValidaion } from './slot.validation';
import { SlotControllers } from './slot.controllers';

const router = express.Router();
router.post(
  '/',
  //auth(USER_ROLE.admin),
  validateRequest(SlotValidaion.createSlotValidationSchema),
  SlotControllers.createSlot,
);

export const SlotRoutes = router;
