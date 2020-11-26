import { JsonTextData } from '../../models/graphql';

export interface MenuItem {
  label: string;
  link: string;
}

export interface TextContent {
  mainTitle: string;
  mailAddress: string;
  mailLinkLabel: string;
  menuItems: MenuItem[];
  copyrightText: string;
}
export interface IndexPageProps {
  data: JsonTextData<TextContent>;
}
