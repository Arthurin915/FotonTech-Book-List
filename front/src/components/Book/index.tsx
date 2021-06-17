import React from 'react'
import { BookAuthor, BookImage, BookTitle, BookContainer } from './styles'
import { BookProps } from './types'

const Book: React.FC<BookProps> = ({book: {bookImg, bookAuthor, bookTitle}}) => {
    return (
        <BookContainer>
            <BookImage src={bookImg}/>
            <BookTitle>{bookTitle}</BookTitle>
            <BookAuthor>{bookAuthor}</BookAuthor>
        </BookContainer>
    )
}

export default Book
