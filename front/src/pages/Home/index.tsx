import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllBooks } from "../../api/services/book";
import Book from "../../components/Book";
import Greetings from "../../components/Greetings";
import SearchInput from "../../components/Inputs/SearchInput";
import NavFooter from "../../components/NavFooter";
import { IBook } from "../../models/books";
import { BookListContainer, BookListEmptyText, HomeContainer } from "./styles";

const Home: React.FC = () => {
  const [books, setBooks] = useState([] as IBook[]);
  const [filteredBooks, setFilteredBooks] = useState([] as IBook[]);
  const [search, setSearch] = useState("");

  const getAllBooksFromServer = async () => {
    setBooks(await getAllBooks());
  };

  useEffect(() => {
    getAllBooksFromServer();
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books?.filter((book) => {
        return [book.title, book.author].some((value) =>
          value?.toLowerCase().includes(search?.toLowerCase())
        );
      })
    );
  }, [search, books]);

  const handleSearchBook = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };

  return (
    <HomeContainer>
      <SearchInput placeholder="Search Book" onChange={handleSearchBook} />
      {search.length === 0 && <Greetings />}
      {filteredBooks.length > 0 ? (
        <BookListContainer>
          {filteredBooks.map((book) => (
            <NavLink to={`book/${book.id}`} key={book.id}>
              <Book book={book} />
            </NavLink>
          ))}
        </BookListContainer>
      ) : (
        <div>
          {search ? (
            <BookListEmptyText>
              None books were found
            </BookListEmptyText>
          ) : (
            <BookListEmptyText>
              None books registered, add a book to continue
            </BookListEmptyText>
          )}
        </div>
      )}
      <NavFooter />
    </HomeContainer>
  );
};

export default Home;
