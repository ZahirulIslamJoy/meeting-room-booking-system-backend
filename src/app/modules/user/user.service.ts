import { TUser } from "./user.interface"
import { User } from "./user.model"

const createStudentIntoDB = async (payload:TUser)=>{
    const result = await User.create(payload);
    console.log(result)
    return result;
}




export const UserService={
    createStudentIntoDB
}