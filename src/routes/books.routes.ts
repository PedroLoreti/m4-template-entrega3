import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid, IsBookValid } from "../middlewares/isBookValid.middlewares";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { bookSchema, updateBookSchema } from "../schemas/bookSchemas";

export const booksRoutes = Router();

const booksControllers = new BooksControllers


booksRoutes.get("/", booksControllers.getBooks)

booksRoutes.post("/", ValidateBody.execute({ body: bookSchema }), IsBookValid.execute, booksControllers.createBook)

booksRoutes.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook)

booksRoutes.get("/:id", IsBookIdValid.execute, booksControllers.getBookById)

booksRoutes.patch("/:id", IsBookIdValid.execute, ValidateBody.execute({ body: updateBookSchema }), IsBookValid.execute, booksControllers.updateBook)

