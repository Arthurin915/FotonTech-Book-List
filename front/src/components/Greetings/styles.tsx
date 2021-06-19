import styled from "styled-components";

export const GreetingsText = styled.h1`
    span {
        font-size: inherit;
        font-weight: 600;
        color: ${({theme: {colors}}) => colors.lightRed};    
    }
`;