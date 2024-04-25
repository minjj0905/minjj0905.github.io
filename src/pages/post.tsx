import Layout from '@/components/common/Layout';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Link, graphql } from 'gatsby';

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            category
            summary
            update
          }
        }
      }
    }
  }
`;

const Post = ({ data }: { data: any }) => (
  <Layout>
    <h1>Post</h1>
    {data.allMdx.edges.map((node: any) => (
      <h1>{node.node.frontmatter.title}</h1>
    ))}
    <Link to="/">
      <Button>To Index</Button>
    </Link>
  </Layout>
);

export default Post;

export const Head = () => <SEO title="Post" />;
