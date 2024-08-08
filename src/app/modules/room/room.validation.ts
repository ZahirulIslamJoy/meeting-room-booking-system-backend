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
      name: z.string({
        required_error: 'Name is required',
      }).optional(),
      roomNo: z.number({
        required_error: 'Room Number is required',
      }).optional(),
      floorNo: z.number({
        required_error: 'Floor Number is required',
      }).optional(),
      pricePerSlot: z.number({
        required_error: 'Price Per Slot is required',
      }).optional(),
      capacity: z.number({
        required_error: 'Capacity is required',
      }).optional(),
      amenities: z.array(z.string()).min(1, { message: 'At least one amenity is required' }).optional(),
      isDeleted : z.boolean().optional()
    }),
  });




export const RoomValidation = {
  createRoomValidationSchema,updateRoomValidationSchema
};
