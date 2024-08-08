import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';
const bookingSchema = new Schema<TSlot>({
  room: { 
    type: Schema.Types.ObjectId, 
    ref: 'room', 
    },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isBooked: { 
    type: Boolean,
     default: false
    },
});

export const Slot = model<TSlot>("slot",bookingSchema)
