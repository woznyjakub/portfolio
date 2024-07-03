import { graphql } from 'gatsby';

export { default } from '../_pages/404';

export const query = graphql`
  {
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "404" }) {
      content {
        pageTitle
        errorCode
        errorMessage
      }
    }
  }
`;
