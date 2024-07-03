import { BasicPage } from '../../containers/pages';
import { Heading } from '../../components/typography';
import { BasicList } from '../../components/misc';
import { Font } from '../../utils';

import { NestedListItemText } from './skills.style';
import { SkillsPageData } from './skills.interface';

type SkillsPageProps = { data: SkillsPageData };

const SkillsPage = ({ data }: SkillsPageProps) => {
  const { content } = data.dataJson;

  return (
    <BasicPage title={content.pageTitle}>
      <BasicPage.Section>
        {content.skillsGroups.length ? (
          <BasicList>
            {content.skillsGroups.map(({ name, skills }) => (
              <BasicList.Item key={name}>
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
              </BasicList.Item>
            ))}
          </BasicList>
        ) : (
          <Heading className="m-auto">{content.skillsGroupsAltText}</Heading>
        )}
      </BasicPage.Section>
    </BasicPage>
  );
};

export default SkillsPage;
