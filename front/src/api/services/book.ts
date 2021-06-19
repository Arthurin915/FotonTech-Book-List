import api from ".."
import { IBook } from "../../models/books";

export const addBook = async (book: Omit<IBook, "id">): Promise<boolean> => {
    const response = await api.post("/book", book);
    return response.data;
}

export const getBookById = async (id: number): Promise<IBook> => {
    const response = await api.get(`/book/${id}`);
    return response.data;
}

export const getAllBooks = async (): Promise<IBook[]> => {
    const response = await api.get("/book");
    return response.data;
}