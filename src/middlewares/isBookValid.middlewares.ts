import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";

export class IsBookIdValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        if (!booksDatabase.some(book => book.id === Number(req.params.id))) {
            return res.status(404).json({ error: "Book not found." });
        }

        next();
    }
}


export class IsBookValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        if (booksDatabase.find(book => book.name === req.body.name)) {
            return res.status(409).json({ error: "Book already registered." });
        }

        next();
    }
}