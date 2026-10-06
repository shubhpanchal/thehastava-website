import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name (minimum 2 characters)" })
    .max(100, { message: "Name is too long (maximum 100 characters)" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid business email address" })
    .max(150, { message: "Email is too long (maximum 150 characters)" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Please enter your company or organization name" })
    .max(100, { message: "Company name is too long (maximum 100 characters)" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number is too long" })
    .optional()
    .or(z.literal("")),
  automationTarget: z
    .string()
    .trim()
    .min(5, { message: "Please describe what manual process or workflow you would like to automate" })
    .max(1000, { message: "Description must be under 1,000 characters" }),
  volume: z
    .string()
    .trim()
    .max(200, { message: "Volume description must be under 200 characters" })
    .optional()
    .or(z.literal("")),
  context: z
    .string()
    .trim()
    .max(2000, { message: "Additional context must be under 2,000 characters" })
    .optional()
    .or(z.literal("")),
  botField: z.string().optional(), // Honeypot field for bot protection
});

export type ContactFormData = z.infer<typeof contactSchema>;
