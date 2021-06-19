import { Request, Response } from "express";
import { convertImageToBase64, getRandomBookImage, getRandomNumber } from "../helpers";
import database from "../database"
import { BookTable } from "../database/model";
import { IBook } from "../models/book";
export const registerBook = async (req: Request, res: Response) => {
  const body = req.body as IBook;
  try {
    await database.sync();
    await BookTable.create({
      author: body.author,
      bookCover: getRandomBookImage(),
      description: body.description,
      title: body.title,
      pageCount: getRandomNumber(60, 485),
      subtitle: `Subtítulo do ${body.title}`
    })

    return res.status(200).json(true);
  } catch (ex) {
    res.status(404).send(ex);
  }
}

export const getBook = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  try {
    await database.sync();
    const book = (await BookTable.findByPk(bookId) as unknown as IBook);
    if (!book) {
      return res.sendStatus(404).json({ error: 'Book not found' });
    }
    book.bookCover = convertImageToBase64(book.bookCover);
    return res.status(200).json(book);
  } catch (ex) {
    res.status(404).send(ex);
  }
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    await database.sync();
    const books = (await BookTable.findAll() as unknown as IBook[]);
    if (!books) {
      return res.sendStatus(404).json({ error: 'Error! Could not find books' });
    }
    books.forEach(book => {
      book.bookCover = convertImageToBase64(book.bookCover);
    });
    return res.status(200).json(books);
  } catch (ex) {
    res.status(404).send(ex);
  }
}