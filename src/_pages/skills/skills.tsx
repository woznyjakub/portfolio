import { FC } from 'react';

import { BasicPage } from '../../containers/pages';
import { Heading } from '../../components/typography';
import { BasicPageTextContent } from '../../models/graphql';
import { Font } from '../../utils';

import { SkillsList, NestedListItemText } from './skills.style';
import { SkillsPageProps } from './skills.model';

const SkillsPage: FC<SkillsPageProps> = ({ data }) => {
  const { content } = data.dataJson;

  const basicPageContent: BasicPageTextContent = {
    pageTitle: content.pageTitle,
  };

  return (
    <BasicPage content={basicPageContent}>
      <BasicPage.Section>
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
      </BasicPage.Section>
    </BasicPage>
  );
};

export default SkillsPage;
