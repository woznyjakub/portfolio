import { SingleJson, PageTextContent, SingleFile, FileGroup } from '../../interfaces/graphql';

export interface ContactDataItem {
  label: string;
  href: string;
  iconName: string;
}

export interface TextContent {
  pageTitle: string;
  contactDatalistLabel: string;
  contactData: ContactDataItem[];
}

export interface SvgIconData {
  publicURL: string;
  name: string;
}

export interface ContactPageProps {
  data: SingleJson<PageTextContent<TextContent>> & FileGroup<SvgIconData>;
}
