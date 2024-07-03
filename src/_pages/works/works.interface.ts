import { GatsbyImage, FileGroup, SingleFileFromGroup, SingleDataJson, PageTextContent } from '../../interfaces/graphql';

export type WorkImage = SingleFileFromGroup<
  GatsbyImage<{
    originalName?: string;
  }>
>;

type LinkData = {
  label: string;
  url: string;
};

type WorkCard = {
  title: string;
  description: string;
  technologies: string;
  releaseDate: string;
  imageName: string;
  links: LinkData[];
};

type TextContent = {
  pageTitle: string;
  releaseDateText: string;
  technologyText: string;
  cards: WorkCard[];
  cardsAltText: string;
};

export type WorksPageData = FileGroup<GatsbyImage> & SingleDataJson<PageTextContent<TextContent>>;
