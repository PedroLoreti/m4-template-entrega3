import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export class HandleErrors {
    static execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        } else {
            return res.status(500).json({ error: "Internal server error." });
        }
    }
}