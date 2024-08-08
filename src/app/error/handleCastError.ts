import mongoose from 'mongoose';
import { TErrorMessages, TErrorResponse } from '../interface/error';

const handleCastError = (err: mongoose.Error.CastError): TErrorResponse => {
  const statusCode = 400;
  const errorMessages: TErrorMessages = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode,
    message: 'Cast Error',
    errorMessages,
  };
};

export default handleCastError;
