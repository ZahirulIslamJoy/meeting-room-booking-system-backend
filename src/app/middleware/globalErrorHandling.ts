// import { NextFunction, Request, Response } from "express";
// import { ZodError } from "zod";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
// const handleError = (err:any,req : Request,res: Response,next : NextFunction)=>{
    
//     let message = "Something Went Wrong"
    
//     let errorMessages = [
//         {
//             path : "",
//             message :  message
//         }
//     ]

//     console.log(err)

//     if(err instanceof ZodError){
//         console.log(err)
//     }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return res.status(500).json({
        success:false,
        message:err.message || "Something went wrong",
        error:err
    })

}

export default handleError;