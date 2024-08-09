import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { Room } from '../room/room.model';
import { TBooking } from './bookings.interface';
import { User } from '../user/user.model';
import { Slot } from '../slot/slot.model';
import { Booking } from './bookings.model';
import mongoose from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';

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
  const session = await mongoose.startSession();
  //update the status of the bookings
  try {
    session.startTransaction();
    const updateResult = await Slot.updateMany(
      { _id: { $in: payload.slots } },
      { $set: { isBooked: true } },
      { session },
    );

    if (!updateResult) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not booked');
    }

    const totalAmount = Number(
      (room.pricePerSlot * payload.slots.length).toFixed(2),
    );
    const isConfirmed = 'unconfirmed';
    //    payload = {totalAmount , isConfirmed , isDeleted , ...payload }
    payload.totalAmount = totalAmount;
    payload.isConfirmed = isConfirmed;
    //transaction and roolback
    const booking = await Booking.create([payload], { session });

    if (!booking) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not booked');
    }
    const bookingResult = await Booking.findById(booking[0]._id)
      .session(session)
      .populate({ path: 'slots' })
      .populate({ path: 'room' })
      .populate({ path: 'user' });

    await session.commitTransaction();
    await session.endSession();
    return bookingResult;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not booked');
  }
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find({ isDeleted: false })
    .populate('slots')
    .populate('room')
    .populate('user');
  return result;
};

const getSpecificUserBookingsFromDB = async (jwtPayload: JwtPayload) => {
  const userEmail = jwtPayload.email;
  const user = await User.findOne({ email: userEmail });
  const result = await Booking.find({ user: user?._id })
    .populate('slots')
    .populate('room')
    .populate('user');
  return result;
};

const updateBookingsIntoDB = async (id: string, payload: Partial<TBooking>) => {
  if (!("isDeleted" in payload)) {
    const booking = await Booking.findById(id);
    const isDeleted = booking?.isDeleted;
    if (isDeleted) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'This room is deleted , Cant Update',
      );
    }
  }
  const result = await Booking.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteBookingFromDB = async (id:string)=>{
  const result = await Booking.findByIdAndUpdate(id,{isDeleted:true}, {
      new:true
  })
  return result ;
}


export const BookService = {
  createBookingsIntoDB,
  getAllBookingsFromDB,
  getSpecificUserBookingsFromDB,
  updateBookingsIntoDB,
  deleteBookingFromDB
};
