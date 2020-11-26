import { JsonTextData } from '../../models/graphql';

export interface SkillItem {
  name: string;
  skills: string[];
}

export interface TextContent {
  skillsGroups: SkillItem[];
  skillsGroupsAltText: string;
}

export interface SkillsPageProps {
  data: JsonTextData<TextContent>;
}
