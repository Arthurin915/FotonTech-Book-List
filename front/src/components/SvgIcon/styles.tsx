import styled, { css } from "styled-components";
import { StyledSvgIconProps } from "./types";

export const SvgContainer = styled.div<StyledSvgIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    ${({ height, width, color, usingStroke }) => css`
      color: ${color ? color : 'inherit'};
      height: ${height ? `${height}rem` : "auto"};
      width: ${width ? `${width}rem` : "auto"};
      * {
        ${usingStroke ? `stroke: currentColor` : `fill: currentColor`}
      }
    `}
  }
`;
