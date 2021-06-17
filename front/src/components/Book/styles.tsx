import styled from "styled-components";
import { TextEllipsisOverflow } from "../../styles/utils";

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
`;

export const BookImage = styled.img`
  margin-bottom: 1rem;
`;

export const BookTitle = styled.span`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
  ${TextEllipsisOverflow};
`;
export const BookAuthor = styled.small`
  ${TextEllipsisOverflow};
`;
