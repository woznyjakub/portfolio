import { GatsbyImage, FileGroup, SingleFileFromGroup, SingleJson, PageTextContent } from '../../models/graphql';

export type WorkImage = SingleFileFromGroup<
  GatsbyImage<{
    originalName?: string;
  }>
>;

export interface LinkData {
  label: string;
  url: string;
}

export interface WorkCard {
  title: string;
  description: string;
  technologies: string;
  releaseDate: string;
  imageName: string;
  links: LinkData[];
}

export interface TextContent {
  pageTitle: string;
  releaseDateText: string;
  technologyText: string;
  cards: WorkCard[];
  cardsAltText: string;
}
export interface WorksPageProps {
  data: FileGroup<GatsbyImage> & SingleJson<PageTextContent<TextContent>>;
}
