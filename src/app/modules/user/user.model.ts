import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

export const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin" , "user"],
  },
 
});


export const User = model<TUser>("user",userSchema)
