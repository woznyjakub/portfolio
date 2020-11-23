import React, { FC } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';
import { media, parseTimeToUnitsObject, parseTimeToString } from '../../utils';
import { SingleFile, GatsbyImage } from '../../models/graphql';
import { TimeDuration } from '../../models/misc';

const currentTimeString = new Date().toISOString();

const content = {
  jobs: [
    {
      companyName: 'NoMonday',
      location: 'Rybnik, Poland',
      startDate: {
        label: 'April 2019',
        value: '2019-04-08',
      },
      endDate: {
        label: 'May 2020',
        value: '2020-05-31',
      },
    },
    {
      companyName: 'SoniqSoft Software House',
      location: 'Radlin, Poland',
      startDate: {
        label: 'June 2020',
        value: '2020-06-01',
      },
      endDate: {
        label: 'Present',
        value: currentTimeString,
      },
    },
  ],
};

const Grid = styled.div`
  width: 100%;
  ${media.phone`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Column = styled.div`
  padding-bottom: 2rem;
  ${media.phone`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

const TextWrapper = styled.article`
  max-width: 350px;
  margin: 0 auto;
  hyphens: auto;
`;

const StyckyContainer = styled.div`
  position: sticky;
  top: 8%;
`;

const ImageWrapper = styled.figure`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 0 2rem 2rem;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    right: 2rem;
    top: 2rem;
    bottom: 0;
    border: 1px solid currentColor;
    z-index: -1;
    will-change: transform;
    transition: transform 0.3s;
  }
  :hover {
    ::before {
      transform: translate(1rem, -1rem);
    }
  }
  ${media.phone`
    margin-right: 0;
  `}
  ${media.desktopSmall`
    margin-right: auto;
    padding: 0 0 3rem 3rem;
    ::before {
      right: 3rem;
      top: 3rem;
    }
    :hover {
      ::before {
        transform: translate(1.5rem, -1.5rem);
      }
    }
  `}
`;

const getWorkingExperienceTime = (): number => {
  return content.jobs.reduce((acc, { startDate, endDate }) => {
    const [startTime, endTime] = [startDate.value, endDate.value].map((date: string) => new Date(date).getTime());
    return acc + endTime - startTime;
  }, 0);
};

interface AboutPageProps {
  data?: SingleFile<GatsbyImage>;
}

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  const workingExperienceTime: number = getWorkingExperienceTime();
  const workingExperience: TimeDuration = parseTimeToUnitsObject(workingExperienceTime);

  return (
    <BasicLayout isReturnButton>
      <main>
        <section>
          <Grid>
            <Column>
              <TextWrapper>
                <Heading as="h1" fontSize="large" gutter="bottom" centered>
                  About
                </Heading>
                <BasicText as="p" fontSize="larger">
                  Hi, nice to see you here!
                </BasicText>
                <BasicText as="p">My name is Jakub Woźny and I'm glad to be programmer specialized in front-end development.</BasicText>
                <BasicText as="p">
                  I can develop fully working F-E layer of websites and web applications keeping the lastest standards, design patterns, good pracises and
                  paying large attention on details.
                </BasicText>
                <BasicText as="p" gutter="bottom">
                  My front-end adveture began in May 2018 and I perpetually keep my skill improving.
                </BasicText>
                <Heading as="h2" gutter="bottom" centered>
                  Experience
                </Heading>
                <ul>
                  {content.jobs.map(({ companyName, location, startDate, endDate }) => (
                    <li key={`${companyName}_${startDate}`}>
                      <BasicText as="p" gutter="bottom">
                        {`${companyName} `}
                        <BasicText as="small" fontSize="smaller" gutter={null}>
                          ({location})
                        </BasicText>
                        <br />
                        <time dateTime={startDate.value}>{startDate.label}</time> - <time dateTime={endDate.value}>{endDate.label}</time>
                      </BasicText>
                    </li>
                  ))}
                </ul>
                <BasicText gutter="bottom" fontSize="larger">
                  It's {parseTimeToString(workingExperience)}
                </BasicText>
                <Heading as="h2" gutter="bottom" centered>
                  Beyond the work
                </Heading>
                <BasicText as="p">
                  I'm motorcycles enthusiast so I like spending time a on ride, furthermore, watching some vlogs about traveling and reading about curiosities
                  from all over the world.
                </BasicText>
              </TextWrapper>
            </Column>
            <Column>
              <StyckyContainer>
                <ImageWrapper>
                  <Img fluid={data.file.childImageSharp.fluid} alt="a programmer's workplace" />
                </ImageWrapper>
              </StyckyContainer>
            </Column>
          </Grid>
        </section>
      </main>
    </BasicLayout>
  );
};

export default AboutPage;
