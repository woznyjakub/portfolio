import styled from 'styled-components';

import { media } from '../../utils';

export const Grid = styled.ul`
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

export const Card = styled.li`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const CardTextWrapper = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SectionTextWrapper = styled.div`
  text-align: center;
  ${media.phone`
    padding: 0 4rem;
  `}
  ${media.tablet`
    padding-bottom: 1rem;
  `}
`;
