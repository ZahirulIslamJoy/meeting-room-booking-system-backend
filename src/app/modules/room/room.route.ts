import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { RoomValidation } from './room.validation';
import { RoomControllers } from './room.controllers';

const router = express.Router();
router.post(
  '/',
  validateRequest(RoomValidation.createRoomValidationSchema),
  RoomControllers.createRoom,
);


export const RoomRoutes = router;
