import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils';
import { Heading, BasicText, Footer } from '../../components';

const content = {
  skillsGroups: [
    {
      name: 'JavaScript',
      skills: ['JavaScript ES6/7/8+', 'React', 'GatsbyJS', 'Redux', 'Basics of TypeScript'],
    },
    {
      name: 'CSS',
      skills: ['CSS', 'Sass', 'Styled Components', 'Less', 'Bootstrap 4'],
    },
    {
      name: 'HTML',
      skills: ['Semantic HTML', 'Pug', 'Handlebars', 'Accessibility (WCAG 2.1)'],
    },
    {
      name: 'Other',
      skills: ['Git (and Git Flow)', 'Webpack', 'Gulp', 'Adobe Xd', 'Figma', 'Photoshop', 'JIRA'],
    },
  ],
};

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
  `};
`;

const SkillsListItem = styled.li`
  border: 1px solid currentColor;
  padding: 1rem;

  ${media.desktopSmall`
    padding: 2rem;
  `}
`;

const NestedListItemText = styled(BasicText)`
  line-height: 1.2;
  && {
    margin-bottom: 0.5rem;
  }
`;

const SkillsPage = () => {
  return (
    <div className="layout-wrapper">
      <header>
        <Heading as="h1" fontSize="large" gutter="bottom" centered>
          Skills
        </Heading>
      </header>
      <main>
        <section>
          <SkillsList className="list-unstyled">
            {content.skillsGroups.map(({ name, skills }) => (
              <SkillsListItem>
                <Heading gutter="bottom">{name}</Heading>
                <ul>
                  {skills.map((skill) => (
                    <li>
                      <NestedListItemText>{skill}</NestedListItemText>
                    </li>
                  ))}
                </ul>
              </SkillsListItem>
            ))}
          </SkillsList>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
