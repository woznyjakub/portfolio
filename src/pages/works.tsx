import { graphql } from 'gatsby';

export { default } from '../_pages/works';

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "works" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "works" }) {
      content {
        pageTitle
        releaseDateText
        technologyText
        cards {
          title
          description
          technologies
          releaseDate
          imageName
          links {
            label
            url
          }
        }
        cardsAltText
      }
    }
  }
`;
