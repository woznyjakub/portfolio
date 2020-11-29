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
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "about" }) {
      content {
        pageTitle
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
`;

// {
//   dataJson(pageName: {eq: "about"}) {
//     pageName
//     content {
//       jobs {
//         companyName
//         location
//         startDate {
//           label
//           value
//         }
//         endDate {
//           label
//           value
//         }
//       }
//     }
//   }
// }
