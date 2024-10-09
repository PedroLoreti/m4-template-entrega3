import { Request, Response } from "express";
import { IBook } from "../interface/interface";
import { booksDatabase, generateId } from "../database/database";

export class BooksControllers {

    createBook(req: Request, res: Response): Response {
        const newBook: IBook = {
            id: generateId(),
            name: req.body.name,
            pages: req.body.pages,
            category: req.body.category,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        booksDatabase.push(newBook);

        return res.status(201).json(newBook);
    }

    getBooks(req: Request, res: Response): Response {
        const { search } = req.query;

        let filteredBooks = booksDatabase;

        if (search) {
            const searchTerm = String(search).toLowerCase();
            filteredBooks = booksDatabase.filter(book =>
                book.name.toLowerCase().includes(searchTerm)
            );
        }

        return res.status(200).json(filteredBooks);
    }

    deleteBook(req: Request, res: Response): Response {
        const index = booksDatabase.findIndex(book => book.id === Number(req.params.id));

        booksDatabase.slice(index, 1);

        return res.status(204);
    }

    getBookById(req: Request, res: Response): Response {
        const findBook = booksDatabase.find(book => book.id === Number(req.params.id));

        return res.status(200).json(findBook);
    }

    updateBook(req: Request, res: Response): Response {
        const index = booksDatabase.findIndex(book => book.id === Number(req.params.id));

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...req.body
        }

        return res.status(200).json(booksDatabase[index]);
    }
}