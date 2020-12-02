import { graphql } from 'gatsby';

export { default } from '../_pages/contact';

export const query = graphql`
  {
    allFile(filter: { extension: { eq: "svg" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "contact" }) {
      content {
        pageTitle
        contactDatalistLabel
        contactData {
          label
          href
          iconName
        }
      }
    }
  }
`;
