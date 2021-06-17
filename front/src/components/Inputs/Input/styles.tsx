import styled, { css } from "styled-components";
import SvgIcon from "../../SvgIcon";
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputLabel = styled.label`
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: black;
`;

export const InputBoxContainer = styled.div`
  position: relative;
`;

export const InputBox = styled.input`
  ${({ theme: { colors } }) => css`
    padding: 1.5rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: ${colors.black};
    outline: none;
    border: none;

    &::placeholder {
      color: ${colors.darkGray};
    }
    border-radius: 1rem;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  `};
`;

export const InputIcon = styled(SvgIcon)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
`;
