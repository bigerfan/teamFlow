import { z } from "zod";

export const userSignupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),

  email: z.email("Please enter a valid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  role: z.string().min(2),
});

export type SignupUserData = z.infer<typeof userSignupSchema>;
