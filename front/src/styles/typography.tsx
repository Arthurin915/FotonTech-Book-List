import { css } from "styled-components";

const globalTypography = css`
  @font-face {
    font-family: "SFProDisplay";
    src: url("../assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf") format("ttf");
    font-style: normal;
  }
  @font-face {
    font-family: "SFProDisplay";
    src: url("../assets/fonts/FontsFree-Net-SFProDisplay-Bold.ttf") format("ttf");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "SFProText";
    src: url("../assets/fonts/FontsFree-Net-SFProText-Regular.ttf") format("ttf");
    font-style: normal;
  }
  @font-face {
    font-family: "SFProText";
    src: url("../assets/fonts/FontsFree-Net-SFProText-Bold.ttf") format("ttf");
      font-weight: bold;
    font-style: normal;

  }
  * {
    font-family: SFProDisplay, sans-serif;
  }

  input, textarea, label, p {
    font-family: SFProText, sans-serif;
  }

  small {
    font-family: Roboto, sans-serif;
  }

`;

export default globalTypography;
