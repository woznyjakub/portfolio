import { BasicPage } from '../../containers/pages';
import { BasicText, Heading } from '../../components/typography';
import { WorkCardData, WorkImage, WorksPageData } from './works.interface';
import { Grid, SectionTextWrapper } from './works.style';
import { WorkCard } from './WorkCard';
import { FluidObject } from 'gatsby-image';

type ProjectsSectionProps = {
  data: WorksPageData;
  type: keyof WorksPageData['dataJson']['content']['projects'];
};

export const ProjectsSection = ({ data, type }: ProjectsSectionProps) => {
  const { content } = data.dataJson;
  const projects = content.projects[type];

  return (
    <BasicPage.Section>
      <SectionTextWrapper className="text-container">
        <Heading as="h2" gutter="bottom" centered>
          {projects.title}
        </Heading>
        {projects.description && (
          <BasicText as="p" gutter="bottom">
            {projects.description}
          </BasicText>
        )}
      </SectionTextWrapper>
      {projects.cards.length ? (
        <Grid>
          {projects.cards.map((card: WorkCardData) => (
            <WorkCard
              fluid={findImage(data, card.imageName)}
              {...card}
              technologyText={content.technologyText}
              releaseDateText={content.releaseDateText}
            />
          ))}
        </Grid>
      ) : (
        <Heading className="m-auto">{content.cardsAltText}</Heading>
      )}
    </BasicPage.Section>
  );
};

const findImage = (data: WorksPageData, imageName: string): FluidObject =>
  data.allFile.edges.find((item: WorkImage) => {
    return item.node.childImageSharp.fluid.originalName === imageName;
  })?.node.childImageSharp.fluid;
