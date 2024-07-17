import styled, { css } from 'styled-components';

import { media, Font } from '../../utils';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktopSmall`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  `}
`;

export const StyledHeader = styled.header`
  padding-top: 1.5rem;
  ${media.tablet`
    padding-top: 4rem;
  `}
`;

export const MainContent = styled.main`
  grid-row-end: span 2;
  position: relative;
  margin-top: auto;
`;

export const MenuWrapper = styled.section`
  display: flex;
  align-items: flex-end;

  ${media.phone`
    min-height: 350px;
  `}
  ${media.tablet`
    min-height: 520px;
  `}
  ${media.desktopMedium`
    min-height: 540px;
  `}
  ${media.desktopLarge`
    min-height: 800px;
  `}
`;

export const Menu = styled.nav`
  display: table;
  position: relative;
  padding: 4rem 0;
  ${media.phone`
    position: absolute;
    left: 0; 
    bottom: 0;
    transform-origin: 0% 100%;
    transform: rotate(90deg) translateX(-100%);
    text-align: right;
    padding: 0 2rem;
  `}
  ${media.tablet`
    padding: 0 4rem;
  `}
  ${media.desktopSmall`
    padding: 0;
  `}
`;

export const List = styled.ul`
  ${media.phone`
    display: flex;
    flex-direction: column-reverse;
  `}
`;

export const MenuItem = styled.a<{ isFirst: boolean; isLast: boolean }>`
  font-family: ${Font.SECONDARY};
  display: block;
  font-size: 4rem;
  letter-spacing: 1px;
  text-decoration: none;
  margin: .5rem 0;
  padding: .5rem 0;

  && {
    ${({ isFirst }) =>
      isFirst &&
      css`
        margin-bottom: 0;
        padding-bottom: 0;
      `}
    ${({ isLast }) =>
      isLast &&
      css`
        margin-top: 0;
        padding-top: 0;
      `}
  }

  ${media.phone`
    font-size: 6rem;
    margin: 1.25rem 0;
    /* these transforms keep rotated element in line with 
    other layout elements (verical-align worked unsatisfying)  */
    transform: translateY(1rem);
  `};
  ${media.tablet`
    font-size: 8rem;
    transform: translateY(1.5rem);
  `};
  ${media.desktopSmall`
    letter-spacing: 4px;
    transform: none;
  `}
  ${media.desktopMedium`
    margin: 2rem 0;
  `}
  ${media.desktopLarge`
    font-size: 10rem;
  `} 
`;
