import styled from 'styled-components';

import { media } from '../../utils';

export const Grid = styled.div`
  width: 100%;
  ${media.phone`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const Column = styled.div`
  padding-bottom: 2rem;
  ${media.phone`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

export const TextWrapper = styled.article`
  max-width: 350px;
  margin: 0 auto;
  hyphens: auto;
`;

export const StyckyContainer = styled.div`
  position: sticky;
  top: 8%;
`;

export const ImageWrapper = styled.figure`
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
