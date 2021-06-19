import styled from "styled-components";
import {
  InputBoxContainer,
  InputContainer,
  InputLabel,
  InputStyle,
} from "../Input/styles";
import { ErrorProps } from "../Input/types";

export const TextareaContainer = styled(InputContainer)``;

export const TextareaLabel = styled(InputLabel)``;

export const TextareaBoxContainer = styled(InputBoxContainer)``;

export const TextareaBox = styled.textarea<ErrorProps>`
  ${InputStyle}
  height: 22.8rem;
  resize: none;
`;
