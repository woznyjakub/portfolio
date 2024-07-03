import { SingleDataJson, PageTextContent, FileGroup } from '../../interfaces/graphql';

type ContactDataItem = {
  label: string;
  href: string;
  iconName: string;
};

type TextContent = {
  pageTitle: string;
  contactDatalistLabel: string;
  contactData: ContactDataItem[];
};

type SvgIconData = {
  publicURL: string;
  name: string;
};

export type ContactPageData = SingleDataJson<PageTextContent<TextContent>> & FileGroup<SvgIconData>;
