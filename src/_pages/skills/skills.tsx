import { BasicPage } from '../../containers/pages';
import { Heading } from '../../components/typography';

import { NestedListItemText, SkillsList } from './skills.style';
import { SkillsPageData } from './skills.interface';

type SkillsPageProps = { data: SkillsPageData };

const SkillsPage = ({ data }: SkillsPageProps) => {
  const { content } = data.dataJson;

  return (
    <BasicPage title={content.pageTitle}>
      <BasicPage.Section>
        {content.skillsGroups.length ? (
          <SkillsList>
            {content.skillsGroups.map(({ name, skills }) => (
              <li key={name}>
                <Heading gutter="bottom">{name}</Heading>
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
      </BasicPage.Section>
    </BasicPage>
  );
};

export default SkillsPage;
