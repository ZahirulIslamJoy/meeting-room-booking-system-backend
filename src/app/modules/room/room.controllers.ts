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

    const getSingleRoom = catchAsync(async(req : Request, res : Response )=>{
        const result= await RoomService.getSingleRoomFromDB(req.params.id)
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Room retrieved successfully",
            data : result
        })
    })


    const getAllRoom = catchAsync(async(req : Request, res : Response )=>{
        const result= await RoomService.getAllRoomFromDB()
        if(result.length == 0){
            sendResponse(res,{
                success: false,
                statusCode : httpStatus.NOT_FOUND ,
                message :"No Data Found",
                data : result
            })
        }
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Rooms retrieved successfully",
            data : result
        })
    })


    const updateRoom = catchAsync(async(req : Request, res : Response )=>{
        const result= await RoomService.updateRoomIntoDB(req.params.id , req.body)
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Room updated successfully",
            data : result
        })
    })


    const deleteRoom = catchAsync(async(req : Request, res : Response )=>{
        const result= await RoomService.deleteRoomIntoDB(req.params.id)
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"Room deleted successfully",
            data : result
        })
    })


   
export const RoomControllers = {
    createRoom  , getSingleRoom , getAllRoom , updateRoom , deleteRoom
}