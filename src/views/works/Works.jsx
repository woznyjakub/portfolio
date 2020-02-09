import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils';
import { Heading, BasicText } from '../../components';

import clockImage from '../../assets/images/works/clock.jpg';
import challenge37Image from '../../assets/images/works/challenge37.jpg';
import challenge35Image from '../../assets/images/works/challenge35.jpg';
import challenge22Image from '../../assets/images/works/challenge22.jpg';
import waxomImage from '../../assets/images/works/waxom.jpg';
import portfolioOld1Image from '../../assets/images/works/portfolio-old-1.jpg';

const content = {
  cards: [
    {
      title: 'Binary clock app',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: clockImage,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/binary-clock-app',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/binary-clock-app/',
        },
      ],
    },
    {
      title: 'Challenge 37',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: challenge37Image,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge37-gatsbyjs-version',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge37-gatsbyjs-version/',
        },
      ],
    },
    {
      title: 'Challenge 35',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: challenge35Image,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge35',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge35/',
        },
      ],
    },
    {
      title: 'Waxom',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: waxomImage,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/waxom',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/waxom/',
        },
      ],
    },
    {
      title: 'Challenge 22',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: challenge22Image,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/challenge22',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/challenge22/',
        },
      ],
    },
    {
      title: 'My very first portfolio page',
      description: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Soluta animi
        aliquam delectus! Adipisci nam accusantium illo.`,
      imageUrl: portfolioOld1Image,
      links: [
        {
          label: 'Repository',
          url: 'https://github.com/woznyjakub/portfolio-1',
        },
        {
          label: 'Preview',
          url: 'https://woznyjakub.github.io/portfolio-1/',
        },
      ],
    },
  ],
};

const Grid = styled.ul`
  ${media.tablet`
    padding: 0 3rem;
  `}
  ${media.desktopSmall`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Card = styled.li``;

const WorksPage = () => {
  return (
    <Grid>
      {content.cards.map(({ title, description, imageUrl, links }, i) => (
        <Card key={`${title}-${i}`}>
          {imageUrl && (
            <figure>
              <img className="img-stretched" src={imageUrl} alt={`${title} example screenshot`} />
            </figure>
          )}
          <article>
            {title && <Heading>{title}</Heading>}
            {description && <BasicText as="p">{description}</BasicText>}
            {(links || []).map(({ label, url }, i) => (
              <BasicText as="a" href={url || null} key={`${label}-${i}`}>
                {label}
              </BasicText>
            ))}
          </article>
        </Card>
      ))}
    </Grid>
  );
};

export default WorksPage;
