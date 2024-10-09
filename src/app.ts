import express, { json } from "express";
import "express-async-errors";
import { booksRoutes } from "./routes/books.routes";
import helmet from "helmet";
import { HandleErrors } from "./errors/handleErros.middleware";
export const app = express();

app.use(helmet());

app.use(json());

app.use(HandleErrors.execute)

app.use("/books", booksRoutes);


