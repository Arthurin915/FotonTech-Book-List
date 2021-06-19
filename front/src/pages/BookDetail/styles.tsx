import styled from "styled-components";
import SvgIcon from "../../components/SvgIcon";

export const BookDetailContainer = styled.div``;

export const BookDetailHeader = styled.header`
  position: relative;
  margin-bottom: 6.7rem;
`;
export const PageBackIcon = styled(SvgIcon)`
  position: absolute;
  top: 5.5rem;
  left: 3.6rem;
`;

export const SelectedBookCover = styled.img`
  width: 15.1rem;
  height: 23.4rem;
  position: absolute;
  bottom: -3.6rem;
  right: 11.1rem;
`;
export const BookDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
`;

export const BookTitle = styled.h1`
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.bluishBlack};
`;
export const BookSubtitle = styled.span`
  color: ${({ theme: { colors } }) => colors.bluishBlack};
  font-size: inherit;
  font-weight: normal;
`;
export const BookAuthor = styled.h3`
  color: ${({ theme: { colors } }) => colors.lightRed};
  font-size: 1.6rem;
`;
export const BookDescription = styled.p`
  height: 27.5rem;
  overflow-y: auto;
`;

export const FloatingActionContainer = styled.div`
  width: 33.5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 0 auto;
  position: absolute;
  bottom: 5.3rem;
  left: 2rem;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
`;

export const ActionContainer = styled.button`
  background-color: transparent;
  align-items: center;
  border: none;
  display: flex;
  line-height: 1.6rem;
  gap: 1rem;
`;

export const ActionDivider = styled.div`
  width: 0.2rem;
  height: 1.6rem;
  border: 1px solid ${({ theme: { colors } }) => colors.black5};
`;

export const ActionText = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.black3};
`;
