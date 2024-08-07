import mongoose from 'mongoose';
import { TErrorMessages, TErrorResponse } from '../interface/error';

const handleDuplicateError = (err: mongoose.Error.CastError): TErrorResponse => {
  const statusCode = 400;
  const errorMessages: TErrorMessages = [
    {
      path: "",
      message: err?.message,
    },
  ];

  return {
    statusCode,
    message: err?.message,
    errorMessages,
  };
};

export default handleDuplicateError;
