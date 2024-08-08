import {Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { RoomService } from "./room.service";

const createRoom = catchAsync(async(req : Request, res : Response )=>{
        const result= await RoomService.createRoomIntoDB(req.body)
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Room added successfully",
            data : result
        })
    })

   
export const RoomControllers = {
    createRoom 
}