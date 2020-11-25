import { SingleFile, GatsbyImage } from '../../models/graphql';

export type CurrentDatePlaceholder = 'current';

/**
 * @todo: check if there is better notation for optional generic here
 */
export interface JobDate<T = string> {
  label: string;
  value: string | T;
}

export interface Job {
  companyName: string;
  location: string;
  startDate: JobDate;
  endDate: JobDate<CurrentDatePlaceholder>;
}
export interface TextContent {
  allDataJson: {
    nodes: [
      {
        pageName: string;
        content: {
          jobs: Job[];
        };
      },
    ];
  };
}
export interface AboutPageProps {
  data?: SingleFile<GatsbyImage> & TextContent;
}
