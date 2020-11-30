import { SingleJson, PageTextContent } from '../../models/graphql';

export interface SkillItem {
  name: string;
  skills: string[];
}

export interface TextContent {
  pageTitle: string;
  skillsGroups: SkillItem[];
  skillsGroupsAltText: string;
}

export interface SkillsPageProps {
  data: SingleJson<PageTextContent<TextContent>>;
}
