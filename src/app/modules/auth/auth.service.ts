import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUpUser = async (payload:TUser)=>{
    const result = await User.create(payload);
    return result 
}

const loginUser = async (payload:TUser)=>{
    
    //check if the user is Exists or not 
    const user = await User.findOne({
        email:payload.email
    })
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"User Not found")
    }
    

    const result = null ;
    return result
}


export const AuthService={
    signUpUser, loginUser
}