import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(3, "Title is Required...").max(255),
  description: z.string().min(3, "Description is Required...").max(1000),
});

export const patchIssueSchema = z.object({
  title: z.string().min(3, "Title is Required...").max(255).optional(),
  description: z
    .string()
    .min(3, "Description is Required...")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(3, "Assigned To is Required...")
    .max(255)
    .optional()
    .nullable(),
});
