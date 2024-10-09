import { z } from "zod";

const baseBookSchema = z.object({
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
});

const bookSchema = baseBookSchema

const updateBookSchema = baseBookSchema.partial();


export { bookSchema, updateBookSchema }