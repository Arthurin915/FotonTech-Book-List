import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { getBookById } from "../../api/services/book";
import { ReactComponent as BackIcon } from "../../assets/icons/back_icon.svg";
import { ReactComponent as BookIcon } from "../../assets/icons/book_icon.svg";
import { ReactComponent as HeadphoneIcon } from "../../assets/icons/headphone_icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share_icon.svg";
import SvgIcon from "../../components/SvgIcon";
import { IBook } from "../../models/books";
import {
  ActionContainer,
  ActionDivider,
  ActionText,
  BookAuthor,
  BookDescription,
  BookDetailContainer,
  BookDetailContent,
  BookDetailHeader,
  BookSubtitle,
  BookTitle,
  FloatingActionContainer,
  PageBackIcon,
  SelectedBookCover,
} from "./styles";

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { colors } = useTheme();

  const [book, setBook] = useState({} as IBook);

  const getBookByIdFromServer = async () => {
    setBook(await getBookById(Number(id)));
  };

  useEffect(() => {
    getBookByIdFromServer();
  }, []);
  return (
    <BookDetailContainer>
      <BookDetailHeader>
        <NavLink to="/home">
          <PageBackIcon Icon={BackIcon} usingStroke />
        </NavLink>
        <img src="/book-detail-bg.png" alt="book detail bg" />
        <SelectedBookCover src={`data:image/png;base64, ${book.bookCover}`} />
      </BookDetailHeader>
      <BookDetailContent>
        <BookTitle>
          {book.title}
          {book.subtitle && <BookSubtitle>: {book.subtitle}</BookSubtitle>}
        </BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
        <BookDescription>{book.description}</BookDescription>
      </BookDetailContent>
      <FloatingActionContainer>
        <ActionContainer>
          <SvgIcon Icon={BookIcon} color={colors.gray2} usingStroke/>
          <ActionText>Read</ActionText>
        </ActionContainer>
        <ActionDivider/>
        <ActionContainer>
          <SvgIcon Icon={HeadphoneIcon} color={colors.gray2} usingStroke/>
          <ActionText>Listen</ActionText>
        </ActionContainer>
        <ActionDivider/>
        <ActionContainer>
          <SvgIcon Icon={ShareIcon} color={colors.gray2} usingStroke/>
          <ActionText>Share</ActionText>
        </ActionContainer>
      </FloatingActionContainer>
    </BookDetailContainer>
  );
};

export default BookDetail;
