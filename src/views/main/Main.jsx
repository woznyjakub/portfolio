import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils';
import { Heading, BasicText } from '../../components';

const content = {
  mainTitle: 'Jakub Woźny\nFront-end developer\nportfolio',
  mailAddress: 'jakub_wozny_01@wp.pl',
  mailLinkLabel: 'Mail me',
  menuItems: [
    {
      label: 'Contact',
      link: '/contact',
    },
    {
      label: 'Skills',
      link: '/skills',
    },
    {
      label: 'Works',
      link: '/works',
    },
    {
      label: 'About',
      link: '/about',
    },
  ],
  copyright: '© Jakub Woźny 2020',
};
const Grid = styled.div`
  display: block;
  ${media.phone`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  `}
`;

const Intro = styled.div``;

const MainContent = styled.div`
  grid-row-end: span 2;
  position: relative;
`;

const AsideContent = styled.aside``;

const MenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;

  ${media.desktopSmall`
    min-height: 520px;
  `}
  ${media.desktopMedium`
    min-height: 540px;
  `}
  ${media.desktopLarge`
    min-height: 800px;
  `}
`;

const Menu = styled.nav`
  display: table;
  position: relative;
  padding: 2rem 0;
  ${media.phone`
    margin: 0 auto;
  `}
  ${media.tablet`
    transform: rotate(90deg);
    text-align: right;
  `}
  ${media.desktopSmall`
    position: absolute;
    left: 0; 
    bottom: 0;
    transform-origin: 0% 100%;
    transform: rotate(90deg) translateX(-100%);
  `}
`;

const MenuItem = styled.a`
  display: block;
  font-size: 4rem;
  letter-spacing: 1px;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.5rem 0;

  && {
    ${({ isFirst }) => isFirst && 'margin-top: 0;'}
    ${({ isLast }) => isLast && 'margin-bottom: 0;'}
  }

  ${media.tablet`
    font-size: 8rem;
  `};
  ${media.desktopSmall`
    margin: 2.5rem 0;
    letter-spacing: 4px;
  `}
  ${media.desktopMedium`
    margin: 4rem 0;
  `}
  ${media.desktopLarge`
    font-size: 12rem;
  `} 
`;

const MainPage = () => {
  return (
    <Grid className="stretch">
      <Intro>
        <Heading as="h1" bottomSpace>
          {content.mainTitle}
        </Heading>
        <BasicText as="a" href={`mailto:${content.mailAddress}`} fillOnHover>
          {content.mailLinkLabel}
        </BasicText>
      </Intro>
      <MainContent>
        <MenuWrapper>
          <Menu>
            <ul>
              {content.menuItems.map(({ label, link }, i, array) => (
                <li key={`${link}-${i}`}>
                  <MenuItem href={link} isFirst={i === 0} isLast={i === array.length - 1}>
                    {label}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </Menu>
        </MenuWrapper>
      </MainContent>
      <AsideContent>
        <BasicText>{content.copyright}</BasicText>
      </AsideContent>
    </Grid>
  );
};

export default MainPage;
