import mongoose from "mongoose";

 export  type TSlot = {
  room: mongoose.Types.ObjectId;
  date: string;                 
  startTime: string;            
  endTime: string;             
  isBooked: boolean;            
}