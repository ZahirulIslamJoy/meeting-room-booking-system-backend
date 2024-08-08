import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Room } from "../room/room.model";
import { TBooking } from "./bookings.interface";
import { User } from "../user/user.model";

const createBookingsIntoDB = async (payload:TBooking)=>{
    
    //check if  the user exists or not 
    const user = await User.findById(payload.user);
    if(!user){
        throw new AppError(httpStatus.BAD_REQUEST , "Invalid user")
    }
    
    //check if Room avaliable with user given id
    const room = await Room.find({ _id: payload?.room, isDeleted: false });
    if(!room){
        throw new AppError(httpStatus.BAD_REQUEST , "Invalid room id")
    }

    console.log(room)
    const result = null
    return  result
}


export const BookService={
    createBookingsIntoDB,
}