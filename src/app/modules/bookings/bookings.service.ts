import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { Room } from '../room/room.model';
import { TBooking } from './bookings.interface';
import { User } from '../user/user.model';
import { Slot } from '../slot/slot.model';
import { Booking } from './bookings.model';

const createBookingsIntoDB = async (payload: TBooking) => {
  //check if  the user exists or not
  const user = await User.findById(payload.user);
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid user');
  }

  //check if Room avaliable with user given id
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const room: any = await Room.findOne({
    _id: payload?.room,
    isDeleted: false,
  });
  if (!room) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid room id');
  }
  //checking if the slot is avaliable or not
  const invalidSlots = await Slot.findOne({
    _id: { $in: payload.slots },
    $or: [{ isBooked: true }, { date: { $ne: payload.date } }],
  });
  if (invalidSlots) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'A slot is already booked from these slots or misusage of slot booking date',
    );
  }
  //Todo : transaction
  //update the status of the bookings
    await Slot.updateMany(
      { _id: { $in: payload.slots } },
      { $set: { isBooked: true } },
    );

  const totalAmount = Number((room.pricePerSlot * payload.slots.length).toFixed(2));
  const isConfirmed = 'unconfirmed';
  //    payload = {totalAmount , isConfirmed , isDeleted , ...payload }
  payload.totalAmount = totalAmount
  payload.isConfirmed = isConfirmed;
  //transaction and roolback 
  const result =  (await (await (await Booking.create(payload)).populate("slots")).populate("room")).populate("user")
  return result;
};

export const BookService = {
  createBookingsIntoDB,
};
