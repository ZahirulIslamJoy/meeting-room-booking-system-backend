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
    const result = await Room.find()
    return result ;
}



export const RoomService={
    createRoomIntoDB , getSingleRoomFromDB , getAllRoomFromDB
}