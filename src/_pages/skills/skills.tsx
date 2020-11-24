import React, { FC } from 'react';

import { BasicLayout } from '../../components/layouts';
import { Heading } from '../../components/typography';

import { SkillsList, NestedListItemText } from './skills.style';

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
