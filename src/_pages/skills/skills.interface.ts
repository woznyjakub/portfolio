import { SingleDataJson, PageTextContent } from '../../interfaces/graphql';

type SkillItem = {
  name: string;
  skills: string[];
};

type TextContent = {
  pageTitle: string;
  skillsGroups: SkillItem[];
  skillsGroupsAltText: string;
};

export type SkillsPageData = SingleDataJson<PageTextContent<TextContent>>;
