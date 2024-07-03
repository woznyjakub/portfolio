import { SingleDataJson, PageTextContent } from '../../interfaces/graphql';

type MenuItemData = {
  label: string;
  link: string;
};

type TextContent = {
  mainTitle: string;
  mailAddress: string;
  mailLinkLabel: string;
  menuItems: MenuItemData[];
  copyrightText: string;
};

export type IndexPageData = SingleDataJson<PageTextContent<TextContent>>;
