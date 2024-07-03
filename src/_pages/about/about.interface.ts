import { GatsbyImage, PageTextContent, SingleDataJson, SingleFile } from '../../interfaces/graphql';

export type CurrentDatePlaceholder = 'current';

type JobDate<T = string> = {
  label: string;
  value: string | T;
};

export type Job = {
  companyName: string;
  location: string;
  startDate: JobDate;
  endDate: JobDate<CurrentDatePlaceholder>;
};

type TextContent = {
  pageTitle: string;
  jobs: Job[];
};

export type AboutPageData = SingleFile<GatsbyImage> & SingleDataJson<PageTextContent<TextContent>>;
