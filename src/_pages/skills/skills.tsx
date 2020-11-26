import React, { FC } from 'react';

import { BasicLayout } from '../../components/layouts';
import { Heading } from '../../components/typography';
import { Font } from '../../utils';

import { SkillsList, NestedListItemText } from './skills.style';
import { SkillsPageProps } from './skills.model';

const SkillsPage: FC<SkillsPageProps> = ({ data }) => {
  const { content } = data.allDataJson.nodes[0];
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
                        <NestedListItemText font={Font.SECONDARY}>{skill}</NestedListItemText>
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
