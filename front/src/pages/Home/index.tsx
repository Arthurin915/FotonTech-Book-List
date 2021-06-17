import React, { useEffect, useState } from "react";
import Book from "../../components/Book";
import { IBook } from "../../components/Book/types";
import Greetings from "../../components/Greetings";
import SearchInput from "../../components/Inputs/SearchInput/SearchInput";
import NavFooter from "../../components/NavFooter";

import { BookListContainer, HomeContainer } from "./styles";

const Home: React.FC = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      bookCover: "/Sprint.png",
      title: "Sprint",
      author: "by Gary teste",
    },
  ] as IBook[]);

  useEffect(() => {
    setBooks((currentBooks) => [...currentBooks, 
     { id: 2,
      bookCover: "/The One Thing.png",
      title: "The One Thing",
      author: "by Teste teste",
    }])
  }, []);

  return (
    <HomeContainer>
      <SearchInput placeholder="Search Book" />
      <Greetings />
      <BookListContainer>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </BookListContainer>
      <NavFooter />
    </HomeContainer>
  );
};

export default Home;
