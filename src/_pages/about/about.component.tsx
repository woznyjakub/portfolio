import React, { FC } from 'react';
import Img from 'gatsby-image';

import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';
import { parseTimeToUnitsObject, parseTimeToString } from '../../utils';
import { TimeDuration } from '../../models/misc';

import { Grid, Column, TextWrapper, StyckyContainer, ImageWrapper } from './about.style';
import { AboutPageProps } from './about.model';

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

const getWorkingExperienceTime = (): number => {
  return content.jobs.reduce((acc, { startDate, endDate }) => {
    const [startTime, endTime] = [startDate.value, endDate.value].map((date: string) => new Date(date).getTime());
    return acc + endTime - startTime;
  }, 0);
};

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
