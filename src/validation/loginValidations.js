import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    retypePassword: z.string().min(6, "Please retype your password"),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords do not match",
    path: ["retypePassword"],
  });
