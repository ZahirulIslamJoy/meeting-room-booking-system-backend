import { Response } from 'express';
import httpStatus from 'http-status';

const authError = (res: Response) => {
  return res.status(httpStatus.UNAUTHORIZED).json({
    success: false,
    statusCode: httpStatus.UNAUTHORIZED,
    message: "You have no access to this route",
  });
};

export default authError;
 