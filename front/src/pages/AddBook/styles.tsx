import styled, { css } from "styled-components";

export const AddBookContainer = styled.div`
  padding: 5.3rem 2rem;
  padding-bottom: 3.8rem;
  overflow-y: auto;
`;

export const AddBookTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.lightRed};
  margin-left: 0.7rem;
  margin-bottom: 5.7rem;
  font-weight: 600;
`;

export const AddBookForm = styled.form`
  display: grid;
  row-gap: 3.8rem;
    input, textarea {
      width: 100%;
  }
`;

export const AddBookButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.lightRed};
    color: ${colors.white};
  `}
`;
