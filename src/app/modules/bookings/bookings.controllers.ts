import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { BookService } from './bookings.service';

const createBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookingsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

export const BookingControllers = {
 createBookings
};
