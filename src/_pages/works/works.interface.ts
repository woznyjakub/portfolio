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

export type WorkCardData = {
  title: string;
  description: string;
  technologies: string;
  releaseDate: string;
  imageName: string;
  links: LinkData[];
};

type CardsSection = {
  title: string;
  description: string;
  cards: WorkCardData[];
};

type TextContent = {
  pageTitle: string;
  releaseDateText: string;
  technologyText: string;
  cardsAltText: string;
  projects: {
    active: CardsSection;
    archived: CardsSection;
  };
};

export type WorksPageData = FileGroup<GatsbyImage> & SingleDataJson<PageTextContent<TextContent>>;
