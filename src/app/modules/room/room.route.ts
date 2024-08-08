import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { RoomValidation } from './room.validation';
import { RoomControllers } from './room.controllers';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(RoomValidation.createRoomValidationSchema),
  RoomControllers.createRoom,
);

router.get(
    '/:id',
    RoomControllers.getSingleRoom,
  );

  router.get(
    '/',
    RoomControllers.getAllRoom,
  )


export const RoomRoutes = router;