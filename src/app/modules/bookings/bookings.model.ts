import { Schema, model } from 'mongoose';
import { TBooking } from './bookings.interface';

const bookingSchema = new Schema<TBooking>({
  date: {
    type: String,
    required: true,
  },
  slots: [{
    type: Schema.Types.ObjectId,
    ref: 'slot',
    required: true,
  }],
  room: {
    type: Schema.Types.ObjectId,
    ref: 'room',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

export const Booking = model<TBooking>('booking', bookingSchema);
