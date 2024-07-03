import { FluidObject } from 'gatsby-image';

export type GatsbyImage<T = {}> = {
  childImageSharp: {
    fluid: T & FluidObject;
  };
};
