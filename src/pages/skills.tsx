import { graphql } from 'gatsby';

export { default } from '../_pages/skills';

export const query = graphql`
  {
    allDataJson(filter: { pageName: { eq: "skills" } }) {
      nodes {
        pageName
        content {
          skillsGroups {
            name
            skills
          }
          skillsGroupsAltText
        }
      }
    }
  }
`;
