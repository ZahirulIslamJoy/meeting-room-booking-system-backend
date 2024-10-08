import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TRoom } from "./room.interface";
import { Room } from "./room.model";


const createRoomIntoDB = async (payload:TRoom)=>{
    const result = await Room.create(payload);
    return result 
}

const getSingleRoomFromDB = async (id: string)=>{
    const result = await Room.findById(id)
    return result 
}

const getAllRoomFromDB = async ()=>{
    //exclude the Deleted Room
    const result = await Room.find({
        isDeleted:false
    })
    return result ;
}

const updateRoomIntoDB = async (id:string, payload : Partial<TRoom>)=>{
    //check if the room exists or not
    const roomExists = await Room.findById(id);
    if(!roomExists){
        throw new AppError (httpStatus.BAD_REQUEST , "Invalid Id")
    }
    if (!("isDeleted" in payload)){
        const isDeleted= roomExists?.isDeleted;
        if(isDeleted){
            throw new AppError(httpStatus.BAD_REQUEST,"This room is deleted , Cant Update")
        }
    }
    const result = await Room.findByIdAndUpdate(id, payload , {
        new:true
    })
    return result ;
}

const deleteRoomIntoDB = async (id:string)=>{
    const roomExists = await Room.findById(id);
    if(!roomExists){
        throw new AppError (httpStatus.BAD_REQUEST , "Invalid Id")
    }
    const result = await Room.findByIdAndUpdate(id,{isDeleted:true}, {
        new:true
    })
    return result ;
}



export const RoomService={
    createRoomIntoDB , getSingleRoomFromDB , getAllRoomFromDB , updateRoomIntoDB , deleteRoomIntoDB
}