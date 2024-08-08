import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import { TErrorMessages } from '../interface/error';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/handleDuplicateError';
import AppError from '../error/AppError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const handleError = (err: any,req: Request,res: Response,next: NextFunction,
) => {
  let message = 'Something Went Wrong';
  let statusCode = 400;
  let errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'Something Went Wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err.name == 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  else if (err.name == 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  else if (err.code == '11000') {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }
  else if(err instanceof AppError){
    statusCode = err?.statusCode;
    message = err?.message;
    errorMessages = [
      {
        path:"",
        message:err?.message
      }
    ];
  }

  else if(err instanceof Error){
    statusCode = 400;
    message = err?.message;
    errorMessages = [
      {
        path:"",
        message:err?.message
      }
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages,
    stack: err?.stack ? err?.stack : null,
  });
  
  }

export default handleError;
