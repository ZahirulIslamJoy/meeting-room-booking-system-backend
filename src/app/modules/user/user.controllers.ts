/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { UserService } from "./user.service"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';

const createUser = catchAsync(async(req : Request, res : Response , next :NextFunction)=>{
        const result : any = await UserService.createUserIntoDB(req.body);
        const {_doc} = result
        const {password , ...remaining} = _doc
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"User registered successfully",
            data : remaining
        })
    })
   



export const UserControllers = {
    createUser
}