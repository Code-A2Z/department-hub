import { z } from "zod";

export const studentLoginSchema = z.object({
  roll: z.string().min(1, { message: "Roll number is required." }),
  name: z.string().min(1, { message: "Name is required." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  remember: z.boolean().default(false),
});

export const adminLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  remember: z.boolean().default(false),
});

export const professorLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  remember: z.boolean().default(false),
});
