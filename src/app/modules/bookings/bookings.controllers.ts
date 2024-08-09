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

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBookingsFromDB();
  if (result.length == 0) {
   return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const getSpecificUserBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSpecificUserBookingsFromDB(req?.user);
  if (result.length == 0) {
   return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});


export const BookingControllers = {
  createBookings,
  getAllBookings,
  getSpecificUserBookings
};
