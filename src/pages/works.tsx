import React, { FC } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { media } from '../utils';
import { BasicLayout } from '../components/layouts';
import { BasicText, Heading } from '../components/typography';
import { GatsbyImage, FileGroup, SingleFileFromGroup } from '../models/graphql';

const content = {
  pageTitle: 'Works',
  releaseDateText: 'Release date:',
  technologyText: 'Used technologies:',
  cards: [
    {
      title: 'Binary clock app',
      description: `React app that recreates binary clock working mechanism.`,
      technologies: 'React, Styled Components',
      releaseDate: 'February 2019',
      imageName: 'clock.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/binary-clock-app',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/binary-clock-app/',
        },
      ],
    },
    {
      title: 'Challenge 37',
      description: `Static page made for learing GatsbyJS advanced CSS.`,
      technologies: 'GatsbyJS, React and Styled Components',
      releaseDate: 'January 2019',
      imageName: 'challenge37.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge37-gatsbyjs-version',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge37-gatsbyjs-version/',
        },
      ],
    },
    {
      title: 'Challenge 35',
      description: `Static page project that helped me learn HTML and CSS basics, and resolving basic JS development problems.`,
      technologies: 'HTML, Sass and jQuery',
      releaseDate: 'October 2018',
      imageName: 'challenge35.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge35',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge35/',
        },
      ],
    },
    {
      title: 'Waxom',
      description: `Static page made for Webpack, HTML and CSS training.`,
      technologies: 'HTML, Sass, vanilla JS and Webpack',
      releaseDate: 'January 2019',
      imageName: 'waxom.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/waxom',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/waxom/',
        },
      ],
    },
    {
      title: 'Challenge 22',
      description: `Static page made for HTML and CSS training.`,
      technologies: 'HTML, Sass and vanilla JS',
      releaseDate: 'October 2018',
      imageName: 'challenge22.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge22',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge22/',
        },
      ],
    },
    {
      title: 'My very first portfolio page',
      description: `Static page made to show my works. It helped me get my first job!`,
      technologies: 'GatsbyJS, React, Styled Components and GraphQL',
      releaseDate: 'February 2019',
      imageName: 'portfolio-old-1.jpg',
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/portfolio-1',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/portfolio-1/',
        },
      ],
    },
  ],
  cardsAltText: 'Something went wrong or this section is empty.',
};

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: auto;

  ${media.phone`
    padding: 0 4rem;
  `}
  ${media.desktopSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Card = styled.li`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const TextWrapper = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type WorkImage = SingleFileFromGroup<
  GatsbyImage<{
    originalName?: string;
  }>
>;
interface WorksPageProps {
  data?: FileGroup<GatsbyImage>;
}

const WorksPage: FC<WorksPageProps> = ({ data }) => {
  return (
    <BasicLayout isReturnButton>
      <header>
        <Heading as="h1" fontSize="large" gutter="bottom" centered>
          {content.pageTitle}
        </Heading>
      </header>
      <main className="stretch m-auto">
        <section className="stretch">
          {content.cards.length ? (
            <Grid>
              {content.cards.map(({ title, description, imageName, links, technologies, releaseDate }) => (
                <Card className="saturate-on-hover-trigger" key={title}>
                  {imageName && (
                    <figure>
                      <Img
                        className="img-stretched saturate-on-hover-item"
                        fluid={
                          // this chain filters image data from graphql by checking
                          // name and returns its `fluid` object
                          data.allFile.edges.find((item: WorkImage) => {
                            return item.node.childImageSharp.fluid.originalName === imageName;
                          }).node.childImageSharp.fluid
                        }
                        alt={`${title || ''} example screenshot`}
                      />
                    </figure>
                  )}
                  <TextWrapper>
                    {title && <Heading gutter="bottom">{title}</Heading>}
                    {description && (
                      <BasicText as="p" fontSize="smaller">
                        <BasicText>{description}</BasicText>
                        <BasicText>
                          {`${content.technologyText} ${technologies}`}
                          <br />
                          {`${content.releaseDateText} ${releaseDate}`}
                        </BasicText>
                      </BasicText>
                    )}
                    <div style={{ marginTop: 'auto' }}>
                      {(links || []).map(({ label, url }, i, array) => (
                        <BasicText
                          as="a"
                          className="underline"
                          href={url || null}
                          key={label}
                          target="_blank"
                          rel="noopener noreferrer"
                          gutter={i < array.length - 1 ? 'right' : null}
                          moveUnderlineOnHover
                        >
                          {label}
                        </BasicText>
                      ))}
                    </div>
                  </TextWrapper>
                </Card>
              ))}
            </Grid>
          ) : (
            <Heading className="m-auto">{content.cardsAltText}</Heading>
          )}
        </section>
      </main>
    </BasicLayout>
  );
};

export default WorksPage;

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "works" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`;
