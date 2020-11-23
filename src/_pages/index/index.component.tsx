import React, { FC } from 'react';

import { Heading, BasicText } from '../../components/typography';
import { BasicLayout } from '../../components/layouts';

import { Grid, StyledHeader, MainContent, MenuWrapper, Menu, List, MenuItem } from './index.style';

const content = {
  mainTitle: 'Jakub Woźny\nFront-end developer\nportfolio',
  mailAddress: 'jakub_wozny_01@wp.pl',
  mailLinkLabel: 'Mail me',
  menuItems: [
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Works',
      link: '/works',
    },
    {
      label: 'Skills',
      link: '/skills',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ],
  copyright: '© Jakub Woźny 2020',
};

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
              <List>
                {content.menuItems.map(({ label, link }, i, array) => (
                  <li key={`${link}`}>
                    <MenuItem href={link} isFirst={i === 0} isLast={i === array.length - 1}>
                      {label}
                    </MenuItem>
                  </li>
                ))}
              </List>
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
