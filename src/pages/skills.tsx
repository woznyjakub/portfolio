import { graphql } from 'gatsby';

export { default } from '../_pages/skills';

export const query = graphql`
  {
    dataJson(dataType: { eq: "pagedata" }, pageName: { eq: "skills" }) {
      content {
        pageTitle
        skillsGroups {
          name
          skills
        }
        skillsGroupsAltText
      }
    }
  }
`;
