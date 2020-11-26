import React, { FC } from 'react';
import Img from 'gatsby-image';

import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';

import { WorkImage, WorksPageProps } from './works.model';
import { Grid, Card, TextWrapper } from './works.style';

const WorksPage: FC<WorksPageProps> = ({ data }) => {
  const { content } = data.allDataJson.nodes[0];
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
                          // its name and returns its `fluid` object
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
