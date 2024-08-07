import { RequestHandler, Response , Request, NextFunction } from "express"

const catchAsync=(fn : RequestHandler)=>{
    return (req : Request , res : Response , next : NextFunction)=>{
        Promise.resolve(fn(req,res,next)).catch((err)=>next(err))
    }
}

export default catchAsync;