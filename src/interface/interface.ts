export interface IBook {
    id: number;
    name: string;
    pages: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}
