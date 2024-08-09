import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { BookingValidation } from './bookings.validation';
import { BookingControllers } from './bookings.controllers';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BookingValidation.createBookingSchema),
  BookingControllers.createBookings,
);

router.get(
  '/',
  auth(USER_ROLE.admin),
  BookingControllers.getAllBookings,
);


export const BookingRoutes = router;
