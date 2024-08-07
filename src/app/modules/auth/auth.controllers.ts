/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AuthService } from "./auth.service";

const signUp = catchAsync(async(req : Request, res : Response , next :NextFunction)=>{
        const result : any = await AuthService.signUpIntoDB(req.body);
        const {_doc} = result
        const {password , ...remaining} = _doc
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"User registered successfully",
            data : remaining
        })
    })
   
export const AuthControllers = {
    signUp
}