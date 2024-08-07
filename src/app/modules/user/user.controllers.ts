/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { UserService } from "./user.service"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync(async(req : Request, res : Response , next :NextFunction)=>{
        const result : any = await UserService.createUserIntoDB(req.body);
        const {_doc} = result
        const {password , ...remaining} = _doc
        sendResponse(res,{
            success: true,
            statusCode : 200 ,
            message :"User registered successfully",
            data : remaining
        })
    })
   



export const UserControllers = {
    createUser
}