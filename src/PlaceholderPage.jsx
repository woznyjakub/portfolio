import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalStyle } from './components';
import colors from './utils/colors';
import media from './utils/media';

const PageWrapper = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 1rem;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  ${media.tablet`
    font-size: 3rem;
  `}
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  padding-bottom: 40vh;
`;

const blendMove = keyframes`
  50% {
    transform: translateY(100%)
  }
  50.01% {
    transform: translateY(-100%)
  }
`;

const TextLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 4px 4px 0;
  margin: 0 2px -0.2em;
  display: inline-block;
  overflow: hidden;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.secondary};
    mix-blend-mode: difference;
    animation: 0.7s;
    pointer-events: none;
  }
  :hover::after {
    animation-name: ${blendMove};
  }
`;

export default function PlaceholderPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Container>
          <Heading>New portfolio page under contruction</Heading>
          <Paragraph>
            You can see my works&nbsp;
            <TextLink href="https://woznyjakub.github.io/portfolio-1" target="_blank" rel="nooperner noreferrer">
              here
            </TextLink>
            .
          </Paragraph>
        </Container>
      </PageWrapper>
    </>
  );
}
