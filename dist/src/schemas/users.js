"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.addressSchema = exports.changePasswordSchema = exports.roleSchema = exports.findSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    role: zod_1.z.number().nullable(),
    password: zod_1.z
        .string()
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});
exports.findSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});
exports.roleSchema = zod_1.z.object({
    name: zod_1.z.string().nullable(),
    description: zod_1.z.string().nullable(),
});
exports.changePasswordSchema = zod_1.z.object({
    oldPassword: zod_1.z.string(),
    newPassword: zod_1.z
        .string()
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});
exports.addressSchema = zod_1.z.object({
    lineOne: zod_1.z.string(),
    lineTwo: zod_1.z.string().nullable(),
    city: zod_1.z.string(),
    state: zod_1.z.string(),
    country: zod_1.z.string(),
    pincode: zod_1.z
        .string()
        .regex(/^\d{6}$/, {
        message: "The lenth of the pincode must be 6 digit only!",
    })
        .length(6),
});
exports.UpdateUserSchema = zod_1.z.object({
    name: zod_1.z.string().nullable(),
    defaultBillingAddress: zod_1.z.number().nullable(),
    defaultShippingAddress: zod_1.z.number().nullable(),
});
