export interface GatsbyImage {
  node: {
    childImageSharp: {
      fluid: {
        aspectRatio: number;
        sizes: string;
        src: string;
        srcSet: string;
        tracedSVG?: string;
        originalName?: string;
      };
    };
  };
}
