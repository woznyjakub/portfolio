import React from 'react';
// import styled, { keyframes } from 'styled-components';
import { GlobalStyle, PageShell } from './components';
// import { colors, media } from './utils/colors';
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

const RootElement = () => {
  return (
    <Router>
      <GlobalStyle />
      {/* {pages.map(({ path }, i) => (
        <Link to={path} key={i}>
          <div style={{ padding: '1rem' }}>{path}</div>
        </Link>
      ))} */}
      {pages.map(({ name, component: PageComponent, path, exact }) => (
        <Route exact={exact || false} path={path} key={name}>
          <PageShell>
            <PageComponent />
          </PageShell>
        </Route>
      ))}
    </Router>
  );
};

export default RootElement;
