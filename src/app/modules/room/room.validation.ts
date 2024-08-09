import { z } from 'zod';

const createRoomValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    roomNo: z.number({
      required_error: 'Room Number is required',
    }),
    floorNo: z.number({
      required_error: 'Floor Number is required',
    }),
    pricePerSlot: z.number({
        required_error: 'Price Per Slot is required',
      }),
    capacity: z.number({
      required_error: 'Capacity is required',
    }),
    amenities: z.array(z.string()).min(1, { message: 'At least one amenity is required' }),
    isDeleted : z.boolean().optional()
  }),
});


const updateRoomValidationSchema = z.object({
    body: z.object({
      name: z.string().optional(),
      roomNo: z.number().optional(),
      floorNo: z.number().optional(),
      pricePerSlot: z.number().optional(),
      capacity: z.number().optional(),
      amenities: z.array(z.string()).optional(),
      isDeleted : z.boolean().optional()
    }),
  });




export const RoomValidation = {
  createRoomValidationSchema,updateRoomValidationSchema
};
