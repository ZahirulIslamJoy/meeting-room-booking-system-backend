import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';
import { TErrorMessages } from '../interface/error';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const handleError = (err: any,req: Request,res: Response,next: NextFunction,
) => {
  let message = 'Something Went Wrong';
  let statusCode = 500;
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
  else if (err.status == '11000') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages,
    stack: err?.stack ? err?.stack : null,
    err: err,
  });
};

export default handleError;
