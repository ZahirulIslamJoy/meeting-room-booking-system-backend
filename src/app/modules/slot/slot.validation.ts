import { z } from 'zod';

const createSlotValidationSchema = z.object({
  body: z.object({
    room : z.string({
        required_error:"Room is required"
    }),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: 'Date must be in the format YYYY-MM-DD',
    }),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: 'Start time must be in the format HH:MM',
    }),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: 'End time must be in the format HH:MM',
    }),
    isBooked: z.boolean().optional(),
  }).refine(
    (body) => {
      const start = new Date(`1970-01-01T${body.startTime}:00`);
      const end = new Date(`1970-01-01T${body.endTime}:00`);
      return end > start;
    },
    {
      message: 'Start time should be before End time !  ',
    },
  ),
});

export const SlotValidaion = {
    createSlotValidationSchema
}
