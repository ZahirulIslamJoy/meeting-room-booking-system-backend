import { ZodError } from "zod";
import { TErrorMessages, TErrorResponse } from "../interface/error";

const handleZodError = (err:ZodError) : TErrorResponse=>{
    const statusCode = 400;
    const errorMessages:TErrorMessages = err.issues.map((issue) =>{
        return {
            path : issue?.path[issue?.path.length-1],
            message: issue.message
        }
    })

    return {
        statusCode ,
        message : "Validation Error",
        errorMessages
    }
   
}

export default handleZodError