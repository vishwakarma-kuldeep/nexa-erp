import z, { string } from 'zod';

export const PermissionsSchema = z.object({
    name:string().nonempty(),
   
})