import React from 'react';
import styled from 'styled-components';

import { BasicText, Heading } from '../../components';
import { media } from '../../utils';
import officeImageUrl from '../../assets/images/office-1.jpg';

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
  width: 80%;
  margin: 0 auto;
  padding: 0 0 1rem 1rem;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    right: 1rem;
    top: 1rem;
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

const AboutPage = () => {
  return (
    <div className="w-100">
      <main>
        <section>
          <Grid>
            <Column>
              <TextWrapper>
                <Heading as="h1" fontSize="large" gutter="bottom" centered>
                  About
                </Heading>
                <BasicText as="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eum accusantium
                  quos, quia nihil labore incidunt aliquid odit omnis maxime. Placeat ipsa vel velit
                  est necessitatibus aperiam vitae, possimus error?
                </BasicText>
                <BasicText as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum
                  repudiandae cupiditate eum nemo ex reiciendis sit eveniet eos, ullam magnam
                  asperiores aspernatur veniam, officiis, ab et unde quae saepe?
                </BasicText>
                <BasicText as="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eum accusantium
                  quos, quia nihil labore incidunt aliquid odit omnis maxime. Placeat ipsa vel velit
                  est necessitatibus aperiam vitae, possimus error?
                </BasicText>
                <BasicText as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum
                  repudiandae cupiditate eum nemo ex reiciendis sit eveniet eos, ullam magnam
                  asperiores aspernatur veniam, officiis, ab et unde quae saepe?
                </BasicText>
                <BasicText as="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum
                  repudiandae cupiditate eum nemo ex reiciendis sit eveniet eos, ullam magnam
                  asperiores aspernatur veniam, officiis, ab et unde quae saepe?
                </BasicText>
              </TextWrapper>
            </Column>
            <Column>
              <StyckyContainer>
                <ImageWrapper>
                  <img className="img-fluid" src={officeImageUrl} alt="a programmer's workplace" />
                </ImageWrapper>
              </StyckyContainer>
            </Column>
          </Grid>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
