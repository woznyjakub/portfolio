import { graphql } from 'gatsby';

export { default } from '../_pages/index';

export const query = graphql`
  {
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "index" }) {
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
`;
