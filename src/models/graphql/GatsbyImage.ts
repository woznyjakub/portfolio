import { FluidObject } from 'gatsby-image';

export interface GatsbyImage<T = {}> {
  childImageSharp: {
    fluid: T & FluidObject;
  };
}
