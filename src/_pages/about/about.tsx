import { FC, useEffect, useState } from 'react';
import Img from 'gatsby-image';

import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';
import { parseTimeToUnitsObject, parseTimeToString, Font } from '../../utils';
import { TimeDuration } from '../../models/misc';

import { Grid, Column, TextWrapper, StyckyContainer, ImageWrapper } from './about.style';
import { AboutPageProps, Job, CurrentDatePlaceholder } from './about.model';
/**
 * replaces date value when it is `current` string, then replace it with real current date value
 * @param date timestamp
 */
const replaceDatePlaceholder = (date: string | CurrentDatePlaceholder, currentTimeString: string): string => {
  return date === 'current' ? currentTimeString : date;
};

const getWorkingExperienceTime = (dataArray: Job[], currentTimeString: string): number => {
  return dataArray.reduce((acc, { startDate, endDate }: Job) => {
    const [startTime, endTime] = [startDate.value, endDate.value].map((date: string) => {
      return new Date(replaceDatePlaceholder(date, currentTimeString)).getTime();
    });
    const singleJobExperienceTime = endTime - startTime;
    return acc + singleJobExperienceTime;
  }, 0);
};

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  const { content } = data.dataJson;
  // get current date in format YYYY-MM-DD and cut smaller than a day values
  const [currentTimeString, setCurrentTimeString] = useState(null);

  /**
   * currentTimeString must be rendered on client side to prevent keeping deploy date as the 'current' one
   */
  const workingExperienceTime: number = currentTimeString && getWorkingExperienceTime(content.jobs, currentTimeString);
  const workingExperience: TimeDuration = currentTimeString && parseTimeToUnitsObject(workingExperienceTime);

  useEffect(() => {
    // get current date in format YYYY-MM-DD and cut smaller than a day values
    const date = new Date().toISOString().split('T')[0];
    setCurrentTimeString(date);
  }, []);

  return (
    <BasicLayout title={content.pageTitle} isReturnButton>
      <main>
        <section>
          <Grid>
            <Column>
              <TextWrapper>
                <Heading as="h1" fontSize="large" gutter="bottom" centered>
                  {content.pageTitle}
                </Heading>
                <BasicText as="p" fontSize="larger">
                  Hi, nice to see you here!
                </BasicText>
                <BasicText as="p">My name is Jakub Woźny and I'm a programmer specialized in front-end development.</BasicText>
                <BasicText as="p">
                  I can develop fully working FE layers of websites and web applications, keeping up with the latest standards, good practises and paying
                  attention to details. I also have back-end side experience.
                </BasicText>
                <BasicText as="p" gutter="bottom">
                  My programming career started in May 2018 and I’ve been improving my skills ever since.
                </BasicText>
                <Heading as="h2" gutter="bottom" centered>
                  Experience
                </Heading>
                <ul>
                  {content.jobs.map(({ companyName, location, startDate, endDate }) => {
                    // endDate may be `current` string placeholder
                    const parsedEndDate = replaceDatePlaceholder(endDate.value, currentTimeString);
                    return (
                      <li key={`${companyName}_${startDate}`}>
                        <BasicText as="p" gutter="bottom" font={Font.SECONDARY}>
                          {`${companyName} `}
                          <BasicText as="small" fontSize="smaller" gutter={null} font={Font.PRIMARY}>
                            ({location})
                          </BasicText>
                          <br />
                          <BasicText as="time" dateTime={startDate.value} title={startDate.value} font={Font.PRIMARY}>
                            {startDate.label}
                          </BasicText>
                          {' - '}
                          <BasicText as="time" dateTime={parsedEndDate} title={parsedEndDate} font={Font.PRIMARY}>
                            {endDate.label}
                          </BasicText>
                        </BasicText>
                      </li>
                    );
                  })}
                </ul>
                {currentTimeString && (
                  <BasicText gutter="bottom" fontSize="larger" font={Font.SECONDARY}>
                    It's {parseTimeToString(workingExperience)} now.
                  </BasicText>
                )}
                <Heading as="h2" gutter="bottom" centered>
                  Beyond my work
                </Heading>
                <BasicText as="p">
                  I'm a motorcycle enthusiast, so I love spending my free time riding and exploring new places. And besides that, I also enjoy watching travel
                  vlogs and reading about fascinating facts about the world that we live in.
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
