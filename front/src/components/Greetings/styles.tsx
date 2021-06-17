import styled from "styled-components";

export const GreetingsText = styled.h1`
    span {
        font-size: inherit;
        color: ${({theme: {colors}}) => colors.lightRed};    
    }
`;