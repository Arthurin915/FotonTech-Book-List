import styled from "styled-components";
import { GreetingsText } from "../../components/Greetings/styles";

export const HomeContainer = styled.div`
  padding: 5rem 2rem;
  ${GreetingsText} {
    margin-top: 3rem;
    margin-bottom: 3.6rem;
  }
`;

export const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  column-gap: 1.6rem;
  row-gap: 1.4rem;
`;
