import { css } from "styled-components";

const globalLayouts = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.darkGray};
  }

  body {
    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.whiteBg};
    width: 37.5rem;
    position: relative;
    div#root {
      height: inherit;
    }
  }

  input,
  textarea {
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: ${({ theme: { colors } }) => colors.gray1};
  }

  h1 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: 0.02rem;
    color: ${({ theme: { colors } }) => colors.black2};
  }

  small {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 900;
    color: ${({ theme: { colors } }) => colors.black1};
  }

  label {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  button {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    outline: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:visited {
      color: currentColor;
    }
  }

  a,
  button {
    cursor: pointer;
  }
`;

export default globalLayouts;
