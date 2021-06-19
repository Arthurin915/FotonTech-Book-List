import React from "react";
import { BookAuthor, BookImage, BookTitle, BookContainer } from "./styles";
import { BookProps } from "./types";

const Book: React.FC<BookProps> = ({ book: { bookCover, author, title } }) => {
  return (
    <BookContainer>
      <BookImage src={`data:image/png;base64, ${bookCover}`} />
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </BookContainer>
  );
};

export default Book;
