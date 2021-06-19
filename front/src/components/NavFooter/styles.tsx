import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import SvgIcon from "../SvgIcon";

export const NavLinkIcon = styled(SvgIcon)``;
export const NavLinkText = styled.span``;

export const NavFooterContainer = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
    padding: 1rem 5.2rem;
    padding-bottom: 0.9rem;
    position: absolute;
    bottom: 0;
    left: 0;
    a {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `};
`;

export const NavLink = styled(Link)`
  ${({ theme: { colors } }) => css`
    span,
    svg {
      color: ${colors.gray1};
    }

    &.active-link {
      span,
      svg {
        color: ${colors.black4};
      }
    }
  `};
`;
