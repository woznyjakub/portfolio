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
        cardsAltText
        projects {
          active {
            title
            description
            cards {
              title
              description
              technologies
              releaseDate
              imageName
              links {
                label
                url
                disabled
              }
            }
          }
          archived {
            title
            description
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
          }
        }
      }
    }
  }
`;
