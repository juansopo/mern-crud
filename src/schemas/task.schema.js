import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title required",
  }),
  description: z
    .string({
      required_error: "Description required",
    })
    .optional(),
  date: z.string().datetime().optional(),
});
