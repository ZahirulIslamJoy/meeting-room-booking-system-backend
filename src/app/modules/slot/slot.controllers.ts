import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { SlotService } from './slot.service';

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotService.createSlotIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const getSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotService.getSlotFromDB(req.query);
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
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  getSlot,
};
