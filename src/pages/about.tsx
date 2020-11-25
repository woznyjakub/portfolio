import { graphql } from 'gatsby';

export { default } from '../_pages/about';

export const query = graphql`
  {
    file(name: { in: "office-1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
          originalName
        }
      }
    }
    allDataJson(filter: { pageName: { eq: "about" } }) {
      nodes {
        pageName
        content {
          jobs {
            companyName
            location
            startDate {
              label
              value
            }
            endDate {
              label
              value
            }
          }
        }
      }
    }
  }
`;
