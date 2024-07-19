import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().nonempty("Please enter email"),
  password: z.string().nonempty("Please enter password"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
