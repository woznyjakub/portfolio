import { FC } from 'react';
import Img from 'gatsby-image';

import { BasicPage } from '../../containers/pages';
import { BasicText, Heading } from '../../components/typography';
import { BasicPageTextContent } from '../../models/graphql';
import { Font } from '../../utils';

import { WorkImage, WorksPageProps } from './works.model';
import { Grid, Card, TextWrapper } from './works.style';

const WorksPage: FC<WorksPageProps> = ({ data }) => {
  const { content } = data.dataJson;

  const basicPageContent: BasicPageTextContent = {
    pageTitle: content.pageTitle,
  };

  return (
    <BasicPage content={basicPageContent}>
      <BasicPage.Section>
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
                        font={Font.SECONDARY}
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
      </BasicPage.Section>
    </BasicPage>
  );
};

export default WorksPage;
