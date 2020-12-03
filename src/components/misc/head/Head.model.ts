import { SingleFile, SingleJson } from '../../../models/graphql';

export interface HeadCpmProps {
  title?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  canonicalUrl: string;
}

export type SiteMetadataResponse = SingleJson<{ siteMetaData: SiteMetadata }> &
  SingleFile<{
    publicURL: string;
  }>;
