import styled, { css } from "styled-components";
import SvgIcon from "../SvgIcon";
import { Link } from "react-router-dom";
import { StyledNavLinkProps } from "./types";

export const NavLinkIcon = styled(SvgIcon)``;
export const NavLinkText = styled.span``;

const IsActiveStyle = css<StyledNavLinkProps>`
  ${({ theme: { colors }, isLinkActive }) => css`
    span, svg {
      color: ${isLinkActive ? colors.black4 : colors.gray1};
    }
    
  `}
`;

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

export const NavLink = styled(Link)<StyledNavLinkProps>`
  ${IsActiveStyle}
`;
