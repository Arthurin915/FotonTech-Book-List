export interface IBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  pageCount: number;
  bookCover: string;
}

export interface BookProps {
  book: IBook;
}
