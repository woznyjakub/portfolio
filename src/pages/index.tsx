import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../utils';
import { Heading, BasicText } from '../components/typography';
import { BasicLayout } from '../components/layouts';

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
  display: flex;
  flex-direction: column;
  ${media.desktopSmall`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  `}
`;

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  ${media.tablet`
    padding-top: 4rem;
  `}
`;

const MainContent = styled.main`
  grid-row-end: span 2;
  position: relative;
  margin-top: auto;
`;

const MenuWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  height: 100%;

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

const Menu = styled.nav`
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

const MenuItem = styled.a<{ isFirst: boolean; isLast: boolean }>`
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
        margin-top: 0;
        padding-top: 0;
      `}
    ${({ isLast }) =>
      isLast &&
      css`
        margin-bottom: 0;
        padding-bottom: 0;
      `}
  }

  ${media.phone`
    font-size: 6rem;
    margin: 2.5rem 0;
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
    margin: 4rem 0;
  `}
  ${media.desktopLarge`
    font-size: 10rem;
  `} 
`;

const IndexPage: FC = () => {
  return (
    <BasicLayout isFooter={false}>
      <Grid className="stretch">
        <StyledHeader>
          <Heading as="h1" gutter="bottom">
            {content.mainTitle}
          </Heading>
        </StyledHeader>
        <MainContent>
          <MenuWrapper>
            <Menu>
              <ul>
                {content.menuItems.map(({ label, link }, i, array) => (
                  <li key={`${link}`}>
                    <MenuItem href={link} isFirst={i === 0} isLast={i === array.length - 1}>
                      {label}
                    </MenuItem>
                  </li>
                ))}
              </ul>
            </Menu>
          </MenuWrapper>
        </MainContent>
        <footer>
          <p>
            <BasicText as="a" href={`mailto:${content.mailAddress}`} fillOnHover>
              {content.mailLinkLabel}
            </BasicText>
            <br />
            <BasicText>{content.copyright}</BasicText>
          </p>
        </footer>
      </Grid>
    </BasicLayout>
  );
};

export default IndexPage;
