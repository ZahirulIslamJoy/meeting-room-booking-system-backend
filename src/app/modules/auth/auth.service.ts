import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUpIntoDB = async (payload:TUser)=>{
    const result = await User.create(payload);
    return result 
}

export const AuthService={
    signUpIntoDB
}