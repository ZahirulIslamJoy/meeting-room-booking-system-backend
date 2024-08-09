import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';
import { Role } from '../modules/user/user.interface';
import authError from '../error/authError';

const auth = (...accessRole : Role[]) => {
  return catchAsync(async (req, res, next) => {
    const tokenWithBearer = req?.headers?.authorization;
    if(!tokenWithBearer){
        return authError(res)
    }

    const token = tokenWithBearer.split(" ")[1]
    const decoded = jwt.verify(token , config.accessToken as string) as JwtPayload
    const jwtEmail = decoded?.email;
    const jwtRole = decoded?.role;
    const user = await User.findOne({email : jwtEmail}) ;
    if(!user){
        return authError(res)
    }
    //checking the role
    if (accessRole.length == 0){
        return authError(res)
    }
    if(!accessRole.includes(jwtRole) ){
        return authError(res)
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
