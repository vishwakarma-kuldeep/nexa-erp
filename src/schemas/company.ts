import z from 'zod';


export const CreateCompanySchema = z.object({
    name:z.string().nonempty(),
    email:z.string().email(),
    phone:z.string().min(10),
    address:z.string().nullable(),
})