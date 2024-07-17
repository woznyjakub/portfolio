import { SingleDataJson, PageTextContent } from '../../interfaces/graphql';

type MenuItemData = {
  label: string;
  link: string;
};

type TextContent = {
  mainTitle: string;
  emailAddress: string;
  emailLinkLabel: string;
  menuItems: MenuItemData[];
  copyrightText: string;
};

export type IndexPageData = SingleDataJson<PageTextContent<TextContent>>;
