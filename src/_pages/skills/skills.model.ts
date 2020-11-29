import { SingleJson, PageTextContent } from '../../models/graphql';

export interface SkillItem {
  name: string;
  skills: string[];
}

export interface TextContent {
  skillsGroups: SkillItem[];
  skillsGroupsAltText: string;
}

export interface SkillsPageProps {
  data: SingleJson<PageTextContent<TextContent>>;
}
