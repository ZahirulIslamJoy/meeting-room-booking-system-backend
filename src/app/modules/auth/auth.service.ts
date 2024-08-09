import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import config from "../../config";

const signUpUser = async (payload:TUser)=>{
    const result = await User.create(payload);
    return result 
}

const loginUser = async (payload:TUser)=>{
    
    //check if the user is Exists or not 
    const user = await User.findOne({
        email:payload.email
    }).select("+password")
   // console.log(user)
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"User Not found")
    }
    const hashPassword = user.password ;
    const isValidPassword = await bcrypt.compare(payload.password,hashPassword);
    if(!isValidPassword){
        throw new AppError(httpStatus.FORBIDDEN ,"Password isnt Valid")
    }

    const jwtPayload = {
        email : user.email ,
        role : user.role
    }

    const token= jwt.sign(jwtPayload, config.accessToken as string, { expiresIn: '10d' });
    const result = {
        token , user
    } 
    return result
}


export const AuthService={
    signUpUser, loginUser
}