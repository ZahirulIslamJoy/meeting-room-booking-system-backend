import { z } from "zod";

const signUpValidationSchema = z.object({
    body: z.object({
        name : z.string({
            required_error : "Name is required"
        }),
        email : z.string().email("Invalid email addrerss"),
        password : z.string({
            required_error :"Password is required"
        }),
        phone: z.number().int().positive("Phone number must be a positive integer"),
        address : z.string({
            required_error :"Password is required"
        }),
        role: z.enum(['admin', 'user']).refine((value) => ['admin', 'user'].includes(value), {
            message: "Role must be either 'admin' or 'user'",
          }),
    })
})

const loginValidationSchema = z.object({
    email:z.string().email("Invalid Email Address"),
    password:z.string()
})


export const AuthValidation = {
    signUpValidationSchema , loginValidationSchema
}