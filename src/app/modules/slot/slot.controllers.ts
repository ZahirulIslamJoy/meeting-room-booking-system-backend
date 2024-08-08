import {Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { SlotService } from "./slot.service";

const createSlot = catchAsync(async(req : Request, res : Response )=>{
        const result= await SlotService.createSlotIntoDB(req.body)
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Slots created successfully",
            data : result
        })
    })

    

   
export const SlotControllers = {
    createSlot
}