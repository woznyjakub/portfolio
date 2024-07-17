import { GatsbyImage, PageTextContent, SingleDataJson, SingleFile } from '../../interfaces/graphql';

type CurrentDatePlaceholder = 'current';

type JobDate<T = string> = {
  label: string;
  value: string | T;
};

type Job = {
  companyName: string;
  location: string;
  role: string;
  startDate: JobDate;
  endDate: JobDate<CurrentDatePlaceholder>;
};

type TextContent = {
  pageTitle: string;
  jobs: Job[];
};

export type AboutPageData = SingleFile<GatsbyImage> & SingleDataJson<PageTextContent<TextContent>>;
