import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Room } from "../room/room.model";
import { TSlot } from "./slot.interface";
import { generateSlots, validateSlot } from "./slot.utils";
import { Slot } from "./slot.model";

const createSlotIntoDB = async (payload:TSlot)=>{
    //check if Room avaliable with user given id
    const room = await Room.findOne({ _id: payload?.room, isDeleted: false });
    if(!room){
        throw new AppError(httpStatus.BAD_REQUEST , "Invalid room id or the room is deleted")
    }

    //SameDate sameTime SameSlot 
    const isConflict =await  validateSlot(payload.room, payload.date , payload.startTime , payload.endTime);
    if(isConflict){
        throw new AppError(httpStatus.BAD_REQUEST , "Slot creation failed: Time conflicts with existing slots for this room in similar date")
    }


    const slots = generateSlots(payload?.room, payload?.date , payload?.startTime , payload?.endTime , payload?.isBooked)
    const result = await Slot.insertMany(slots)
    return result 
}

  const  getSlotFromDB =async (query : Record<string , unknown>)=>{
    const {date , roomId}= query 
    if(roomId && date ){
        const  result = await Slot.find({room:roomId , date: date , isBooked:false}).populate("room")
        return result ;
      }
    if(date){
      const  result = await Slot.find({date:date , isBooked:false}).populate("room")
      return result ;
    }
    if(roomId){
        const  result = await Slot.find({room:roomId , isBooked:false}).populate("room")
        return result ;
      }
      const result = await Slot.find({isBooked:false}).populate("room")
    return result
  }




export const SlotService={
    createSlotIntoDB , getSlotFromDB
}