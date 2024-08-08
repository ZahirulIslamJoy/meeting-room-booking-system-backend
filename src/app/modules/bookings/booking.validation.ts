import { z } from 'zod';

const createBookingSchema = z.object({
  body: z.object({
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use YYYY-MM-DD.'),
    slots: z.array(
      z.string({
        required_error: 'Slots is required',
      }),
    ),
    room: z.string({
      required_error: 'Room is required',
    }),
    user: z.string({
        required_error: 'User is required',
      }),
  }),
});


export const BookingValidation = {
    createBookingSchema
}