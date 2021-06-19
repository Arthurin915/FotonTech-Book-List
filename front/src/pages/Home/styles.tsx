import styled from "styled-components";
import { GreetingsText } from "../../components/Greetings/styles";

export const HomeContainer = styled.div`
  padding: 5rem 2rem;
  height: 100%;
  padding-bottom: 6rem;
  overflow-y: auto;
  ${GreetingsText} {
    margin-top: 3rem;
  }
`;

export const BookListContainer = styled.div`
  margin-top: 3.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  column-gap: 1.6rem;
  row-gap: 1.4rem;
`;

export const BookListEmptyText = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 3.6rem;
`;
