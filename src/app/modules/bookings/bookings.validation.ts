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

const updateBookingsSchema = z.object({
  body: z.object({
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use YYYY-MM-DD.')
      .optional(),
    slots: z.array(z.string()).optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount:z.number().optional(),
    isConfirmed: z.enum(['confirmed', 'unconfirmed']).refine((value) => ['confirmed', 'unconfirmed'].includes(value), {
      message: "isConfirmed must be either 'confirmed' or 'unconfirmed'",
    }).optional(),
    isDeleted : z.boolean().optional()
  }),
});

export const BookingValidation = {
  createBookingSchema,
  updateBookingsSchema,
};
