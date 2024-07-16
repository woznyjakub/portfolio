import Img from 'gatsby-image';

import { BasicLayout } from '../../components/layouts';
import { BasicText, Heading } from '../../components/typography';
import { Font } from '../../utils';

import { Grid, Column, TextWrapper, StyckyContainer, ImageWrapper } from './about.style';
import { AboutPageData } from './about.interface';

type AboutPageProps = {
  data: AboutPageData;
};

const AboutPage = ({ data }: AboutPageProps) => {
  const { content } = data.dataJson;

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
                <BasicText as="p">My name is Jakub Woźny and I'm a programmer specialized in full-stack web development.</BasicText>
                <BasicText as="p">
                  I can create fully functional web applications and websites, working on both the front-end and back-end sides while adhering to the latest
                  standards and best practices and paying close attention to detail.
                </BasicText>
                <BasicText as="p" gutter="bottom">
                  My programming career started in May 2018, and I've been improving my skills ever since.
                </BasicText>
                <Heading as="h2" gutter="bottom" centered>
                  Experience
                </Heading>
                <ul>
                  {content.jobs.map(({ companyName, location, startDate, endDate }) => {
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
                          <BasicText as="time" dateTime={endDate.value} title={endDate.value} font={Font.PRIMARY}>
                            {endDate.label}
                          </BasicText>
                        </BasicText>
                      </li>
                    );
                  })}
                </ul>
                <Heading as="h2" gutter="bottom" centered>
                  Beyond my work
                </Heading>
                <BasicText as="p">
                  I'm a motorcycle enthusiast, so I love spending my free time riding and exploring new places. And besides that, I also enjoy watching travel
                  vlogs and reading about fascinating facts about the world we live in.
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
