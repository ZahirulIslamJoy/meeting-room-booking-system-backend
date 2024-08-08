import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Room } from "../room/room.model";
import { TSlot } from "./slot.interface";
import { generateSlots } from "./slot.utils";
import { Slot } from "./slot.model";

const createSlotIntoDB = async (payload:TSlot)=>{
    //check if Room avaliable with user given id
    const room = await Room.findOne({ _id: payload?.room, isDeleted: false });
    if(!room){
        throw new AppError(httpStatus.BAD_REQUEST , "Invalid room id")
    }
    const slots = generateSlots(payload?.room, payload?.date , payload?.startTime , payload?.endTime , payload?.isBooked)
    const result = await Slot.insertMany(slots)
    return result 
}




export const SlotService={
    createSlotIntoDB
}