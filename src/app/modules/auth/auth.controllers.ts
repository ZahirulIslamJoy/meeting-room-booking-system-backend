/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AuthService } from "./auth.service";

const signUp = catchAsync(async(req : Request, res : Response )=>{
        const result : any = await AuthService.signUpUser(req.body);
        const {_doc} = result
        const {password , ...remaining} = _doc
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"User registered successfully",
            data : remaining
        })
    })

    const login = catchAsync(async(req : Request, res : Response)=>{
        const result : any  = await AuthService.loginUser(req.body);
        const {token, user} = result;
        const {_doc} = user
        const {password , ...remaining} = _doc
        sendResponse(res,{
            success: true,
            statusCode : httpStatus.OK ,
            message :"User logged in successfully",
            token:token,
            data : remaining
        })
    })


   
export const AuthControllers = {
    signUp , login
}