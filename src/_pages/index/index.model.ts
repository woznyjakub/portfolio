import { JsonTextData } from '../../models/graphql';

export interface MenuItemData {
  label: string;
  link: string;
}

export interface TextContent {
  mainTitle: string;
  mailAddress: string;
  mailLinkLabel: string;
  menuItems: MenuItemData[];
  copyrightText: string;
}
export interface IndexPageProps {
  data: JsonTextData<TextContent>;
}
