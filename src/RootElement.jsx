import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, PageShell } from './components';
import { colors } from './utils';
// import media from './utils/media';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AboutPage, ContactPage, MainPage, SkillsPage, WorksPage } from './views';

const pages = [
  {
    name: 'Main',
    component: MainPage,
    path: '/',
    exact: true,
  },
  {
    name: 'About',
    component: AboutPage,
    path: '/about',
  },
  {
    name: 'Contact',
    component: ContactPage,
    path: '/contact',
  },
  {
    name: 'Skills',
    component: SkillsPage,
    path: '/skills',
  },
  {
    name: 'Works',
    component: WorksPage,
    path: '/works',
  },
];

const MainWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  min-height: 100vh;
`;

const RootElement = () => {
  return (
    <Router>
      <GlobalStyle />
      <MainWrapper>
        {pages.map(({ name, component: PageComponent, path, exact }) => (
          <Route exact={exact || false} path={path} key={name}>
            <PageShell>
              <PageComponent />
            </PageShell>
          </Route>
        ))}
      </MainWrapper>
    </Router>
  );
};

export default RootElement;
