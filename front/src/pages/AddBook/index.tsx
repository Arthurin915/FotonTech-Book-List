import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { addBook } from "../../api/services/book";
import Input from "../../components/Inputs/Input/Input";
import Textarea from "../../components/Inputs/Textarea/Input";
import NavFooter from "../../components/NavFooter";
import { IBook } from "../../models/books";
import {
  AddBookContainer,
  AddBookForm,
  AddBookTitle,
  AddBookButton,
} from "./styles";

const AddBook: React.FC = () => {
  const initialState = {author: "", description: "", title: ""} as IBook;

  const [bookToAdd, setBookToAdd] = useState(initialState);

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const isFormValid = checkFormIsValid();
      if(isFormValid) {
        await addBook(bookToAdd);
        alert("Book successfully added")
      }
    } catch (err) {
      alert(err);
    }
    setBookToAdd(initialState);
  };

  const checkFormIsValid = () => {
    return Object.values(bookToAdd).every(value => !!value);
  }


  const handleFormInput = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setBookToAdd({ ...bookToAdd, [name]: value });
    },
    [bookToAdd]
  );


  return (
    <AddBookContainer>
      <AddBookTitle>Add a new Book</AddBookTitle>
      <AddBookForm onSubmit={onSubmitForm}>
        <Input id="title" required name="title" hasError={bookToAdd?.title === ""} labelText="Name" value={bookToAdd?.title} onChange={handleFormInput} />
        <Input id="author" required name="author" hasError={bookToAdd?.author === ""} labelText="Author" value={bookToAdd?.author} onChange={handleFormInput} />
        <Textarea id="description" required name="description" hasError={bookToAdd?.description === ""} labelText="Description" value={bookToAdd?.description} onChange={handleFormInput} />
        <AddBookButton type="submit">Add new Book</AddBookButton>
      </AddBookForm>
      <NavFooter/>
    </AddBookContainer>
  );
};

export default AddBook;
