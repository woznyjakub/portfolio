import { graphql } from 'gatsby';

export { default } from '../_pages/index';

export const query = graphql`
  {
    allDataJson(filter: { pageName: { eq: "index" } }) {
      nodes {
        pageName
        content {
          mainTitle
          mailAddress
          mailLinkLabel
          menuItems {
            label
            link
          }
          copyrightText
        }
      }
    }
  }
`;
