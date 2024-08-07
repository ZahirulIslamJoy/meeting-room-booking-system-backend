import mongoose from 'mongoose';
import { TErrorMessages } from '../interface/error';
const handleValidationError = (err : mongoose.Error.ValidationError)=>{
    const statusCode = 400;
    const errorMessages:TErrorMessages= Object.values(err.errors).map((error)=>{
        return {
            path : error?.path,
            message: error ?.message
        }
    })

    return {
        statusCode,
        message:"Validation Error",
        errorMessages
    }
}


export default handleValidationError;