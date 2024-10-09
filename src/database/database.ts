import { IBook } from "../interface/interface";

const booksDatabase: IBook[] = [];

let id = 0

export const generateId = () => {
    id++
    return id
}

export { booksDatabase }