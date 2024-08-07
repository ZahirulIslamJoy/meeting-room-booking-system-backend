import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const handleError = (err:any,req : Request,res: Response,next : NextFunction)=>{
    return res.status(500).json({
        success:false,
        message:err.message || "Something went wrong",
        error:err
    })
}

export default handleError;