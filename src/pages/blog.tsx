/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            category
            draft
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }: { data: any }) => (
  <>
    <h1>blogblog</h1>
    {data.allMdx.edges.map((node: any) => (
      // eslint-disable-next-line react/jsx-key
      <h1>{node.node.frontmatter.title}</h1>
    ))}
  </>
);

export default BlogPage;
