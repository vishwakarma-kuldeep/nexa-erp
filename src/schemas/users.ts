import { z } from "zod";

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.number().nullable(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    ),
});

export const findSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    ),
});
export const roleSchema = z.object({
  name: z.string().nullable(),
  description: z.string().nullable(),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }
    ),
});

export const addressSchema = z.object({
  lineOne: z.string(),
  lineTwo: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  pincode: z
    .string()
    .regex(/^\d{6}$/, {
      message: "The lenth of the pincode must be 6 digit only!",
    })
    .length(6),
});

export const UpdateUserSchema = z.object({
  name: z.string().nullable(),
  defaultBillingAddress: z.number().nullable(),
  defaultShippingAddress: z.number().nullable(),
});
