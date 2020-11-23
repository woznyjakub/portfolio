import React, { FC } from 'react';
import styled from 'styled-components';

import { media } from '../../utils';
import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';

const content = {
  skillsGroups: [
    {
      name: 'JavaScript',
      skills: ['JavaScript ES2020', 'TypeScript', 'React', 'GatsbyJS', 'NextJS', 'Redux', 'RxJS', 'Web components'],
    },
    {
      name: 'CSS',
      skills: ['CSS', 'Sass', 'Styled Components', 'Bootstrap 4', 'Material UI'],
    },
    {
      name: 'HTML',
      skills: ['Semantic HTML', 'ARIA', 'Pug', 'Accessibility (WCAG 2.1)', 'Knowledge about good SEO practises'],
    },
    {
      name: 'Backend',
      skills: ['NodeJS', 'NestJS', 'MongoDB'],
    },
    {
      name: 'Other',
      skills: ['Git', 'Webpack', 'Git Flow', 'Adobe Xd', 'Photoshop', 'JIRA, Gitlab'],
    },
  ],
  skillsGroupsAltText: 'Something went wrong or this section is empty.',
};

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.25rem;
  max-width: 1200px;
  margin: 0 auto;
  ${media.phone`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `};
  ${media.desktopLarge`
    grid-gap: 4rem;
  `}
`;

const NestedListItemText = styled(BasicText)`
  line-height: 1.2;
  && {
    margin-bottom: 0.5rem;
  }
`;

const SkillsPage: FC = () => {
  return (
    <BasicLayout isReturnButton>
      <header>
        <Heading as="h1" fontSize="large" gutter="bottom" centered>
          Skills
        </Heading>
      </header>
      <main className="stretch h-100">
        <section className="m-auto w-100">
          {content.skillsGroups.length ? (
            <SkillsList className="list-unstyled">
              {content.skillsGroups.map(({ name, skills }) => (
                <li key={name}>
                  <Heading gutter="bottom" fontSize="larger">
                    {name}
                  </Heading>
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>
                        <NestedListItemText>{skill}</NestedListItemText>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </SkillsList>
          ) : (
            <Heading className="m-auto">{content.skillsGroupsAltText}</Heading>
          )}
        </section>
      </main>
    </BasicLayout>
  );
};

export default SkillsPage;
